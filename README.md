![AfroPython Logo](AfroPython_brand.png "AfroPython")

## O que é o AfroPython?
O AfroPython é uma oficina de programação que tem o objetivo de incentivar a população negra nas áreas de tecnologia, porém não é um evento exclusivo para este grupo.

O AfroPython deseja ser uma iniciativa marcante: para quem faz e para quem participa. E queremos somente marcas positivas e felizes, já que as razões que nos unem não são tão historicamente nobres: o fato de que somos 54% da população brasileira e nossa presença representa apenas 0,4% dos profissionais de Tecnologia da Informação no Brasil.

##

# Quero contribuir, como rodar o projeto?

A estrutura consiste em rodar os comandos básicos de um projeto, minificando, compilando e compactando arquivos, direcionando eles para a pasta destino informada no arquivo gulpfile.js no valor da variável ``target.``

Os arquivos devem ser organizados na pasta SRC ou na pasta padrão de conteúdo dependendo da forma como o projeto vai ser desenvolvido.
([http://localhost:3000](http://localhost:3000))!

## Softwares necessários:

```
1 - Node.js
2 - NPM (incluso na versão Windows do Node.js)
```

## Instruções de como utilizar o projeto

1 - Para baixar as dependências de frontend.:

```
$ npm install
```

2 - Para rodar o projeto em [http://localhost:3000](http://localhost:3000):

```
$ npm start
```

## Outras tarefas do NPM

* **`npm install --save 'nomedependencia' `** - instala a dependência desejada
* **`npm run gulp css-compile`** - compila os arquivos ``*.SCSS`` da pasta SRC para o ``style.css`` na DIST
* **`npm run gulp js-compile`** - compila o ``*.JS`` da pasta SRC e redireciona para a dist

## Outras tarefas do GULP

* **`gulp css-minify`** - depois de executar a task de compilação, o arquivo vai ser minificado e direcionado para a DIST, renomeado como ``style.min.css`` (obs.: este arquivo final é o que deve ser chamado na ``index.html``)
* **`gulp js-minify`** - minifica o ``*.JS`` da pasta SRC e redireciona para a dist
* **`gulp build`** - executa as tasks de css-rev e js-rev
* **`gulp image-minify`** - compacta as imagens da pasta src/images e coloca na dist/img
* **`gulp default`** - executa todas as tasks e levanta o ambiente (localhost)

##

Criamos um [waffle](https://waffle.io/AfroPython/afropython-site) onde armazenaremos todas as tarefas que ainda precisam ser feitas em nosso site.


Em nossa [Wiki](https://github.com/AfroPython/afropython-site/wiki) você encontrará um pouco de nossa história :D.

##

Nos acompanhe em nossa página no [Facebook](https://www.facebook.com/AfroPython/)

E nosso email para contato: afropython@gmail.com

##

Abraços de toda equipe do AfroPython :yellow_heart:
