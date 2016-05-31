# DLE Utilities
This repo consists of Angular directives that could be used in different applications via directives. 

## Available Utilities

  - Basic Calculator  <calculator></calculator>
  - Scientific Calculator <scientific-calculator></scientific-calculator>

### Running Demo

Within the project, a demo page has been created that allows you to test out the utilties without having to embed them in a separate project.  An already bundled js file has been checked in so you don't have to anything to run it locally but download the project by clicking on the "Download ZIP" button in the top right hand corner of the repo's GitHub page.


### Installation
In order to add more utilities, or make changes to existing one you need to have [Node.js](https://nodejs.org/) v4+ along with webpack.

In order to be able to use the webpack command in the terminal, you will need to have it installed globally:
```sh
$ npm install webpack -g
```

Once webpack is running you're ready to clone the repos and install its dependancies:
```sh
$ git clone [git-repo-url]
$ cd dle-utilities
$ npm install
$ webpack
```

### Integration with other apps
At the moment these utilities aren't being hosted in a private NPM registry, so in order to use them you will first have to go through the installation steps mentioned above.

Assuming you've done this in the same parent folder as the project you want to use them in, you will nave to install the module using the "npm i" command.

```sh
$ npm install ../dle-utilities --save
```