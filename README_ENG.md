![AfroPython Logo](AfroPython_brand.png "AfroPython")

[![Waffle.io - Issues in progress](https://badge.waffle.io/AfroPython/afropython-site.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/AfroPython/afropython-site)

## What is AfroPython?
AfroPython is a programming workshop that aims to encourage the colored population in technology areas, but it is not an exclusive event for this group.


AfroPython wants to be a remarkable initiative: for those who do and for those who participate. And we want only positive and happy marks, the fact that we are 54% of the Brazilian population and our presence represents only 0.4% of Information Technology professionals in Brazil.

##

# I want to contribute, how to run the project?


The structure consists of running the basic commands of a project, minifying, compiling and compressing files, directing them to the destination folder informed in the file gulpfile.js in the value of the variable `` target.``

## Required Software:

```
1 - Node.js
2 - NPM (incluso na versão Windows do Node.js)
```

## Instructions on how to use the project

1 - To download frontend dependencies.:

```
$ npm install
```

2 - To run the project in [http://localhost:3000](http://localhost:3000):

```
$ npm start
```

## Other NPM Tasks

* **`npm install --save 'nomedependencia' `** - 
installs the desired dependency
* **`npm run gulp css-compile`** - compiles files ``*.SCSS`` from the SRC folder to the ``style.css`` in DIST 
* **`npm run gulp js-compile`** - compile with ``*.JS``
 the SRC folder and redirects to the dist

##  SRC folder and redirect Other GULPin tasks for dist

* **`gulp css-minify`** - after executing the compilation task, the file will be mined and directed to the DIST, renamed as ``style.min.css`` (note: this final file is what should be called in ``index.html`` (I.e.
* **`gulp js-minify`** - minifies ``*.JS`` from the SRC folder and redirects to the dist
* **`gulp build`** - performs the tasks of css-rev and js-rev
* **`gulp image-minify`** - compress the images from the src / images folder and put it in the dist / img
* **`gulp default`** - performs all tasks and raises the environment (localhost)

##

We create a [waffle](https://waffle.io/AfroPython/afropython-site) where we will store all the tasks that still need to be done on our site.

In our [Wiki](https://github.com/AfroPython/afropython-site/wiki) you will find some of our history :D.

##

Follow us on our [Facebook] page (https://www.facebook.com/AfroPython/)

And our email to contact: afropython@gmail.com

##

We at AfroPython strive to provide all participants with an environment of respect and harassment free regardless of gender, age, sexual orientation, disability, physical appearance, race or religion.

Read the full version of our [Code of Conduct] (https://github.com/AfroPython/afropython-site/wiki/Code of Conduct).

##

Abraços de toda equipe do AfroPython :yellow_heart:





