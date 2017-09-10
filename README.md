# AfroPython

## Para rodar o projeto

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
$ gulp
```

## Outros comandos úteis

* **`npm install --save-dev 'nomedependencia' `** - instala a dependência desejada
* **`gulp css-compile`** - compila os arquivos ``*.SCSS`` da pasta SRC para o ``style.css`` na DIST
* **`gulp css-minify`** - depois de executar a task de compilação, o arquivo vai ser minificado e direcionado para a DIST, renomeado como ``style.min.css`` (obs.: este arquivo final é o que deve ser chamado na ``index.html``)
* **`gulp js-compile`** - compila o ``*.JS`` da pasta SRC e redireciona para a dist
* **`gulp js-minify`** - minifica o ``*.JS`` da pasta SRC e redireciona para a dist
* **`gulp build`** - executa as tasks de css-rev e js-rev
* **`gulp image-minify`** - compacta as imagens da pasta src/images e coloca na dist/img
* **`gulp default`** - executa todas as tasks e levanta o ambiente (localhost)

