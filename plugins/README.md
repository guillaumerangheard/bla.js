# bla.js plugins
I created a bunch of little plugins while I was writing [bla.js](https://github.com/guillaumerangheard/blajs).

## $.aspectRatio ( ) [v0.1.0]
This static plugin was inspired by [verge](https://github.com/ryanve/verge), by [Ryan Van Etten](https://github.com/ryanve). It returns the viewport's aspect ratio in the form of a number, and requires **$.viewport** 0.1+ to work. Not to be confused with **$.api.aspectRatio**, which returns a given _element_'s aspect ratio.

## $.api.aspectRatio ( ) [alpha]
This instance plugin was inspired by [verge](https://github.com/ryanve/verge), by [Ryan Van Etten](https://github.com/ryanve). It returns the first element's aspect ratio in the form of a number, and requires **$.api.bRect** 0.1+ to work. Not to be confused with **$.aspectRatio**, which returns the _viewport_'s aspect ratio.

## $.api.bRect ( ) [v0.1.0]
This one-line, zero-dependency instance plugin is basically a wrapper around [`element.getBoundingClientRect`](https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect). It returns an object describing the first element's position and dimensions with four properties: `left`, `top`, `width`, and `height`.

## $.api.isInViewport ( ) [v0.1.0]
This instance plugin was inspired by [verge](https://github.com/ryanve/verge), by [Ryan Van Etten](https://github.com/ryanve). It requires **bRect** 0.1+ and **viewport** 0.1+ to work, and consists of only one function, which returns `true` if the first element is in the viewport, and `false` otherwise.

## $.plug ( String _alias_ , Function _code_ ) [alpha]
This static plugin is very much a work in progress. It basically allows one to add plugins to **bla.js** at any time:
```javascript
$.plug("myAwesomePlugin",function(){
	// My awesome code
	// ...
	return this;
});
```

## $.Template [alpha]
This static plugin will add client-side templating to **bla.js**, and is very much a work in progress. It was inspired by [EJS](https://ejs.co/) and [Krasimir Tsonev](https://krasimirtsonev.com/)'s [Javascript template engine in just 20 lines](https://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line). It exposes a `$.Template` factory function (i.e. no need to use `new`).

### $.template ( String _source_ )
This functions creates an instance of `$.Template`, attributing it a given `source` (i.e. some string to turn into a template), and compiling said `source` into a function (see **$.Template.prototype.render** below).
```javascript
var t = $.Template("Hello, <?this.place?>.");
```
The same result can be achieved by doing so:
```javascript
var t = $.Template();
t.source="Hello, <?this.place?>.";
t.compile();
```

### $.Template.prototype.compile ( )
Compiles the `$.Template`'s current source, returing `true` if the compiling process succeeded, and `false` otherwise. If so, you can call `$.Template.prototype.log` to check what went wrong.

### $.Template.prototype.log ( )

### $.Template.prototype.source
Sets the source for the `$.Template`. When changing the latter's source, one needs to recompile it using `$.Template.prototype.compile`.

## $.viewport [v0.1.0]
This static plugin was inspired by [verge](https://github.com/ryanve/verge), by [Ryan Van Etten](https://github.com/ryanve). It has no dependencies, and consists of three functions:

### $.viewport ( )
This function returns the dimensions of the viewport as an object with two properties: `width` and `height`.

### $.viewport.height ( )
This function returns the viewport's height.

### $.viewport.width ( )
This function returns the viewport's width.
