![AfroPython Logo](AfroPython_brand.png "AfroPython")

[![Waffle.io - Issues in progress](https://badge.waffle.io/AfroPython/afropython-site.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/AfroPython/afropython-site)

## What is AfroPython?
AfroPython is a programming workshop that aims to encourage the black population in technology areas, but it is not an exclusive event for this group.

AfroPython wants to be a remarkable initiative: for those who do and for those who participate. And we want only positive and happy marks, since the reasons that unite us are not so historically noble: the fact that we are 54% of the Brazilian population and our presence represents only 0.4% of Information Technology professionals in Brazil.

##

# I want to contribute, how to run the project?

The structure consists of running basic commands of a project, minifying, compiling and compressing files, by directing them to the destination folder informed in the gulpfile.js file in the variable value ``target.``

The files should be organized in the SRC folder or in the default content folder depending on how the project will be developed.
([http://localhost:3000](http://localhost:3000))!

## Required softwares:

```
1 - Node.js
2 - NPM (included in the Node.js version for Windows)
```

## Instructions on how to use the project

1 - To download frontend dependencies:

```
$ npm install
```

2 - To run the project in [http://localhost:3000](http://localhost:3000):

```
$ npm start
```

## Other NPM tasks

* **`npm install --save 'dependencyname' `** - installs the desired dependency
* **`npm run gulp css-compile`** - compile the ``*.SCSS`` files from the SRC folder to the ``style.css`` in DIST
* **`npm run gulp js-compile`** - compile the ``*.JS`` from the SRC folder and redirects to the dist

## Other GULP tasks

* **`gulp css-minify`** - after running the compilation task, the file will be minified and directed to the DIST, renamed as ``style.min.css`` (note: this final file is what should be called in ``index.html``)
* **`gulp js-minify`** - minify the ``*.JS`` from the SRC folder and redirects to the dist
* **`gulp build`** - run the tasks of css-rev and js-rev
* **`gulp image-minify`** - compress the images from the src/images folder and put it in the dist/img
* **`gulp default`** - run all tasks and raise the environment (localhost)

##

We created a [waffle](https://waffle.io/AfroPython/afropython-site) where we will store all the tasks that still need to be done on our site.

In our [Wiki](https://github.com/AfroPython/afropython-site/wiki) you will find a little of our history :D.

##

Follow us on our [Facebook](https://www.facebook.com/AfroPython/) page

And our contact email: afropython@gmail.com

##

We at AfroPython strive to provide for all participants a harassment-free and respectfull environment, regardless of gender, age, sexual orientation, disability, physical appearance, race or religion.

Read the full version of our [Code of Conduct](https://github.com/AfroPython/afropython-site/blob/master/Code_of_Conduct.md).


##

Hugs from the whole AfroPython team :yellow_heart:
