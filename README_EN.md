![AfroPython Logo](AfroPython_brand.png "AfroPython")

## What is AfroPython?
AfroPython is a programming workshop that aims to encourage the black population in technology areas, but it is not an exclusive event for this group.

AfroPython wants to be a remarkable initiative: for those who do and for those who participate. And we want only positive and happy marks, since the reasons that unite us are not so historically noble: the fact that we are 54% of the Brazilian population and our presence represents only 0.4% of Information Technology professionals in Brazil.

---------------------------------------

# I want to contribute, how to run the project?

The structure consists of running basic commands of a project, minifying, compiling and compressing files, by directing them to the destination folder informed in the gulpfile.js file in the variable value ``target.``

The files should be organized in the SRC folder or in the default content folder depending on how the project will be developed.
([http://localhost:8080](http://localhost:8080))!

## Required softwares:

- Node.js (https://nodejs.org/en/download/)
- NPM (https://www.npmjs.com/get-npm) [_bundled in the Node.js version for Windows_]
- Docker (https://docs.docker.com/install/) [_optional_]

## Instructions on how to use the project

1 - To download frontend dependencies:

```sh
npm install
```

2 - To run the project in [http://localhost:8080](http://localhost:8080):

```sh
npm start
```

3 - To run the project in a container [http://localhost:8080](http://localhost:8080):

```sh
docker run --rm -dt -p 8080:80 --name afropython afropython/afropython-site:1.0.0
```

## Other tasks

### NPM

* `npm install --save 'nomedependencia'` - install the desired dependency
* `npm run build ` - prepare for production
* `npm run deploy ` - perform deployment task

### Docker - building image

```sh
docker build -t afropython/afropython-site -f Dockerfile .
```

---------------------------------------

In our [Wiki](https://github.com/AfroPython/afropython-site/wiki) you will find a little of our history :D.

---------------------------------------

Follow us on our [Facebook](https://www.facebook.com/AfroPython/) page

And our contact email: afropython@gmail.com

---------------------------------------

We at AfroPython strive to provide for all participants a harassment-free and respectfull environment, regardless of gender, age, sexual orientation, disability, physical appearance, race or religion.

Read the full version of our [Code of Conduct](https://github.com/AfroPython/afropython-site/blob/master/Code_of_Conduct.md).

---------------------------------------

Hugs from the whole AfroPython team :yellow_heart:
