# Docker

## Required Softwares

- [Docker](https://store.docker.com/search?type=edition&offering=community) (18.06+ recommended)
- [docker-compose](https://docs.docker.com/compose/install/) (1.22+ recommended)


## Short Version

### Usage

1. Set up your UID in a `.env` file:

```sh
cp .env.example .env

# type id and hit enter on your terminal to get your current UID
# update the number on the .env file created above
id
```

2. Build the images executing the following command:

```sh
docker-compose build
```

3. Run the container executing the following command:

```sh
docker-compose up -d
```

4. Connect to the running container executing the following command:

```sh
docker-compose exec site ash
```

5. Install the project dependencies executing the following command, connected in the container:

```sh
# terminal connected in the container
npm ci
```

- [Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

6. Run the project executing the following command, connected in the container:

```sh
# terminal connected in the container
npm run start:docker
```

7. Done! Now access http://localhost:8080

## Long Version / Understanding what you're doing

### What is Docker?

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

In a way, Docker is a bit like a virtual machine. But unlike a virtual machine, rather than creating a whole virtual operating system, Docker allows applications to use the same Linux kernel as the system that they're running on and only requires applications be shipped with things not already running on the host computer. This gives a significant performance boost and reduces the size of the application.

And importantly, Docker is open source. This means that anyone can contribute to Docker and extend it to meet their own needs if they need additional features that aren't available out of the box.

[Source](https://opensource.com/resources/what-docker)

### What is Docker Compose?

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

[Source](https://docs.docker.com/compose/overview/)

### What is UID and how does it affect my Docker container?

I've found a great article which gives a great introduction to why setting up a UID is needed and important. Link below.

- [Understanding how uid and gid work in Docker containers](https://medium.com/@mccode/understanding-how-uid-and-gid-work-in-docker-containers-c37a01d01cf)

On our setup, we need to configure the UID basically because we want our files from the host and container to be **owned by the same user**.

### `docker-compose.yml`

```yml
version: "3"

services:
  site:
    build:
      context: ./
      args:
        - UID=${UID}
    image: afropython-site-image
    container_name: afropython-site
    ports:
      - "8080:8080"
    volumes:
      - ./:/home/node/site:rw,cached
```

All the information below can be found at [Compose file reference](https://docs.docker.com/compose/compose-file/).

#### `version: "3"`

The Compose file have different formats, and they are specific to each version. Version 3 is the most current and recommended version the time of writing this document.

[Compose versioning](https://docs.docker.com/compose/compose-file/compose-versioning/)

#### `services:`

List of services that the Compose file will run.

> **What is a Compose service?**
>
> In a distributed application, different pieces of the app are called “services.” For example, if you imagine a video sharing site, it probably includes a service for storing application data in a database, a service for video transcoding in the background after a user uploads something, a service for the front-end, and so on.
>
> Services are really just “containers in production.” A service only runs one image, but it codifies the way that image runs—what ports it should use, how many replicas of the container should run so the service has the capacity it needs, and so on. Scaling a service changes the number of container instances running that piece of software, assigning more computing resources to the service in the process.
>
> [Source](https://docs.docker.com/get-started/part3/#about-services)

#### `site:`

Name of the service. It can be changed to any name we want to, but `site` seems to fit for our case.

#### `build:`

Configuration options that are applied at build time.

#### `context: ./`

Path to a directory containing a `Dockerfile`.

#### `args:`

List of build arguments. In our case, we pass only the UID.

#### `image: afropython-site-image`

Name of the image after we build it.

> **Docker Images vs. Containers**
>
> An image is an inert, immutable, file that's essentially a snapshot of a container. Images are created with the build command, and they'll produce a container when started with run.
>
> [Source](https://stackoverflow.com/a/26960888)

#### `container_name: afropython-site`

Name of the container we'll run.

#### `ports:`

List of ports mapping the host port to a container port. In our case, we map the host port `8080` to the container port `8080`.

> **Host and Container ports**
>
> By default, when you create a container, it does not publish any of its ports to the outside world. To make a port available to services outside of Docker, or to Docker containers which are not connected to the container’s network, use the --publish or -p flag. This creates a firewall rule which maps a container port to a port on the Docker host.
>
> [Source](https://docs.docker.com/config/containers/container-networking/#published-ports)

#### `volumes:`

List of volumes. In a development environment, a volume is generally used to give your container access to your source code. In our case, we mount a volume of our whole project, with `./`, to the folder `/home/node/site` in the container. The `rw,cached` part is used to improve the performance of reading and writing on OSX machines. You can read more about it [here](https://docs.docker.com/docker-for-mac/osxfs-caching/).


### `Dockerfile`

```sh
FROM library/node:10.13-alpine

ARG UID=1000

ENV APP=/home/node/site
ENV NODE_ENV=development
ENV PORT=8080

RUN apk --update upgrade \
  && apk add --no-cache \
    shadow

RUN apk add --no-cache tzdata \
  && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
  && echo "America/Sao_Paulo" > /etc/timezone \
  && apk del tzdata

RUN usermod -u ${UID:-1000} node \
  && mkdir -p ${APP} \
  && chown -R node:node ${APP}

USER node

WORKDIR ${APP}

EXPOSE ${PORT}

CMD ["tail", "-f", "/dev/null"]
```

All the information below can be found at [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

#### `FROM`

It defines a base image to start our own. We're using a node image from the [official repository](https://hub.docker.com/_/node/). Also, we're using the `alpine` alternative, so we get a smaller final version of our image.

#### `ARG`

It defines variables that users can pass a build time. In your case, we're receiving the `UID` variable, and giving it a default value of `1000`.


#### `ENV`

It defines environment variables. Those variables can be used at the build time.

#### `RUN`

It executes instructions on top of the current image. We have 3 `RUN` executions on our image:

- The first one uses `apk` to upgrade the system and install the `shadow` package. This package is needed to execute the `usermod` command below.
- The second one updates the timezone to `America/Sao_Paulo`.
- The third one uses the `usermod` command to change the UID of the `node` user. It also creates the `APP` folder if needed and changes its ownership.

#### `USER`

It changes the user to be used on instructions that follow the command. Also, when you connect to the container, you'll be logged in as this user.

#### `WORKDIR`

It sets the working directory for any instructions that follow.

#### `EXPOSE`

It defines a port number to listen on the network at runtime. This is the container port, not the host port.

#### `CMD`

This is the command that will be executed when the container runs. In our case, we're just calling the `tail` command so our container keeps running indefinitely.
