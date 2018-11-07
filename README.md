![AfroPython Logo](logo.png "AfroPython")

---------------------------------------

[English Version](README.en-US.md)

---------------------------------------

# O que é o AfroPython?

O AfroPython é uma oficina de programação que tem o objetivo de incentivar a população negra nas áreas de tecnologia, porém não é um evento exclusivo para este grupo.

O AfroPython deseja ser uma iniciativa marcante: para quem faz e para quem participa. E queremos somente marcas positivas e felizes, já que as razões que nos unem não são tão historicamente nobres: o fato de que somos 54% da população brasileira e nossa presença representa apenas 0,4% dos profissionais de Tecnologia da Informação no Brasil.

---------------------------------------

# Quero contribuir, como rodar o projeto?

A estrutura consiste em rodar os comandos básicos de um projeto, minificando, compilando e compactando arquivos.

Os arquivos devem ser organizados na pasta `src` ou na pasta padrão de conteúdo dependendo da forma como o projeto vai ser desenvolvido.

## Softwares necessários:

- [Node.js](https://nodejs.org/en/download/) (10.13+ recomendado)
- [Docker](https://store.docker.com/search?type=edition&offering=community) _[OPCIONAL]_ (18.06+ recomendado)

## Instruções de como utilizar o projeto

1. Configurar caminho dos Git Hooks:

#### Importante para que antes do _push_ seu código passe por uma validação em nossos linters. (veja [nosso hook](./.githooks/pre-push))

```sh
git config core.hooksPath .githooks
```

2. Para baixar as dependências de frontend:

```sh
npm install
```

3. Para rodar o projeto em [http://localhost:8080](http://localhost:8080):

```sh
npm start
```

4. **[OPCIONAL]** Caso queira rodar o projeto utilizando Docker, veja mais informações no arquivo de instruções [clicando aqui](./docs/DOCKER.md).

## Outras tarefas

### NPM

* `npm install --save 'nomedependencia'` - instala a dependência desejada
* `npm run build ` - prepara o site para produção
* `npm run deploy ` - realiza o deploy

### Docker

#### If you don't want to install a different version of Node.js on your machine, just love Docker as some of us do or just wanna check how Docker works in a development environment, you can check some instructions about Docker and how to run the project [here](./docs/DOCKER.md).

#### Se você não quiser instalar uma versão diferente do Node.js na sua máquina, simplesmente ama Docker como nós ou quer aprender um pouco mais sobre Docker no ambiente de desenvolvimento, você pode verificar algumas instruções sobre Docker e como rodar o projeto [clicando aqui](./docs/DOCKER.md).

---------------------------------------

# Wiki

Em nossa [Wiki](https://github.com/AfroPython/afropython-site/wiki) você encontrará um pouco de nossa história :D.

---------------------------------------

# Contato

Nos acompanhe em nossa página no [Facebook](https://www.facebook.com/AfroPython/)

E nosso email para contato: afropython@gmail.com

---------------------------------------

Nós do AfroPython nos esforçamos para fornecer a todos os participantes um ambiente de respeito e livre de assédio, independentemente de sexo, idade, orientação sexual, deficiência, aparência física, raça ou religião.

Leia a versão integral do nosso [Código de conduta](https://github.com/AfroPython/afropython-site/wiki/C%C3%B3digo-de-Conduta).

---------------------------------------

Abraços de toda equipe do AfroPython :yellow_heart:
