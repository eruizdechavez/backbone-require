backbone-require
================

A Backbone.js and RequireJS example. 

## Installation ##

This example does not require any installation as it is a static Web Application. 

You can just drop the public folder on your current Web Server. If you do not have one or do not want to hesitate on moving the code and you have Node.js at hand, you can also ```npm install```-it and this will install [node-static](https://github.com/cloudhead/node-static)  which is a nice static Web Server; after this is done just run ```node server.js``` and browse to [http://localhost:8080](http://localhost:8080).

## But, what is this about? ##

This is an example done on part of my free time as a follow up on some improvements to my personal skill set and for the current application I am working on. 

The code consists on a [Backbone.js](http://backbonejs.org/) application which loads dependencies and libraries using [RequireJS](http://requirejs.org/). The application is also using [Backbone-Super](https://github.com/lukasolson/Backbone-Super) to make it easier to extend components to avoid code duplication ([DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself)). Last, but not least, I am also playing with the idea of letting the modules communicate through a Front Controller and create different dialogs using a Pop Up "Factory".

The look and feel is achieved with the simple yet powerful [Bootstrap](http://twitter.github.com/bootstrap/).

## I like the idea, but... where do I start? ##

Assuming you are not familiar with [RequireJS](http://requirejs.org/) (which you totally should as this example relies on it), the main file for this example is on public/main.js. The actual Main view is on public/components/Main.js and it's HTML is on public/components/templates/Main.html. Once you are familiar with RequireJS and these 3 files you should be able to understand the rest of the code. 

If you still have questions, do not hesitate in contact me on [twitter](http://twitter.com/erickrdch), my [blog](http://erickrdch.com) or here as an [issue](https://github.com/erickrdch/backbone-require/issues).

## Licence ##

This example is under an [MIT](http://opensource.org/licenses/MIT) licence.
