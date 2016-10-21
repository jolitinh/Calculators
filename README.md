# DLE Utilities
This repo consists of UI Widgets that could be used in different applications via Angular directives. 

## Available Angular Directives

  - Basic Calculator  
  ```
<calculator></calculator>
```
![alt tag](https://github.com/jolitinh/Calculators/blob/dev/screenshots/basic-calculator.png)

  - Scientific Calculator (In Progress - not yet functional)
  ```
<scientific-calculator></scientific-calculator>
```
![alt tag](https://github.com/jolitinh/Calculators/blob/dev/screenshots/scientific-calculator.png)



### Running Demo

Within the project, a demo page has been created that allows you to test out the utilties without having to embed them in a separate project.  An already bundled js file has been checked in so you don't have to anything to run it locally but download the project by clicking on the "Download ZIP" button in the top right hand corner of the repo's GitHub page.

After downloading it, open the dist/calculator-demo.html file directly in a browswer.  It doesn't need to run on a webserver. 


### Dev Installation
In order to add more utilities, or make changes to existing one you need to have [Node.js](https://nodejs.org/) v4+ along with webpack.

In order to be able to use the webpack command in the terminal, you will need to have it installed globally:
```sh
$ npm install webpack -g
```

Once webpack is running, you're ready to clone the repos and install its dependancies:
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

Then add a script tag to your html file:
```
<script src="/node_modules/dle-utilities/dist/dle.utilities.js"></script>
```

Once that's done, you're now able to add it as an Angular dependancy to your existing Angular apps.   You could either use the entire library which is wrapped as a 'dle.utilities' module: 
```
var app = angular.module('MyNewAngularApp', ['dle.utilities']);
```

or you could just choose which particular modules you want:

```
var app = angular.module('MyNewAngularApp', ['dle.calculator', 'dle.scientific-calculator']);
```


### Testing

Unit tests are found under the 'test' folder.  In order to run them you must first have gulp and karma installed globally: 

```sh
$ npm install -g gulp
$ npm install -g karma
```

Running the tests: 

```sh
$ gulp test
```

or you could also run tests with Karma directly: 
```sh
$ karma start
```


