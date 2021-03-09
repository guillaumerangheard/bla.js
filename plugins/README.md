# bla.js plugins
I created a bunch of little plugins while I was writing [bla.js](https://github.com/guillaumerangheard/blajs).

## bRect (v0.1.0)
This _instance_ plugin is basically a wrapper around [`element.getBoundingClientRect`](https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect). It has no dependencies, and consists of one function.

### $.prototype.bRect ( )
This function returns an object with four properties: `left`, `top`, `width`, and `height`.

## isInViewport (v0.1.0)
This _instance_ plugin was inspired by [verge](https://github.com/ryanve/verge), by [Ryan Van Etten]. It requires **bRect** 0.1+ and **viewport** 0.1+ to work, and consists of only one function.

### $.prototype.isInViewport ( )
This function returns `true` if the first element is in the viewport, and `false` otherwise.

## templates (alpha)
This _static_ plugin adds templating to **bla.js**, and is very much a work in progress. It was inspired by [EJS](https://ejs.co/) and [Krasimir Tsonev](https://krasimirtsonev.com/)'s [Javascript template engine in just 20 lines](https://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line).

## viewport (v0.1.0)
This _static_ plugin was inspired by [verge](https://github.com/ryanve/verge), by [Ryan Van Etten]. It has no dependencies, and consists of three functions:

### $.viewport ( )
This function returns the dimensions of the viewport as an object with two properties: `width` and `height`.

### $.viewport.height ( )
This function returns the viewport's height.

### $.viewport.width ( )
This function returns the viewport's width.
