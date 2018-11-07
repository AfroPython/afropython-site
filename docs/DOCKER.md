# Docker

## Required Softwares

- [Docker](https://store.docker.com/search?type=edition&offering=community) (18.06+ recommended)
- [docker-compose](https://docs.docker.com/compose/install/) (1.22+ recommended)


## Usage

### Short Version

1. Build the images executing the following command:

```sh
docker-compose build
```

2. Run the container executing the following command:

```sh
docker-compose up -d
```

3. Connect to the running container executing the following command:

```sh
docker-compose exec site ash
```

4. Install the project dependencies executing the following command, connected in the container:

```sh
# terminal connected in the container
npm ci
```

- [Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

5. Run the project executing the following command, connected in the container:

```sh
# terminal connected in the container
npm run start:docker
```

6. Done! Now access http://localhost:8080

### Long Version / Understanding what you're doing

**TODO**
