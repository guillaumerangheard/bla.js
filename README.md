# bla.js

**bla.js** is a compact front-end javascript library for common tasks, with jQuery-like API.
Its works on IE9+ and modern browsers, as it uses (a version of) <a target="_blank" href="https://github.com/guillaumerangheard/Qjs">Q</a> as its selector engine.

## Constructor
$ ( Collection | Element | String [ , Element | String ] )

## Writing plugins
**bla.js** is very easy to write plugins for, so one can make it do just what she wants to do. There are two types of plugins one can write: **static plugins** and **instance plugins**.

## Static plugins
A static plugin is one that adds functionalities to `$`, but not to its instances. To create one, just add a method to `$`, like so:
```javascript
// Adding a static plugin:
$.myPlugin = function(){
    // Do things.
};
```
You can declare a static plugin at any point in your code. To use it, just call it:
```javascript
$.myPlugin(someData);
```

### Instance plugins
An instance plugin is, as the name implies, one that adds functionalities to all instances of `$`, that is to `$.prototype`. To create one, one only needs to attach her code to the `$.api` object, like so:
```javascript
$.api.myOtherPlugin = function(){
    // Do things.
    // Don't forget to add "return this" at the end of your code,
    // so as to make it chainable, much like you would when writing
    // a jQuery plugin:
    return this;
};
```
Please note that instance plugins must be declare _before_ your first call to `$()`. Instance plugins can only be called from an instance of `$`:
```javascript
$.myOtherPlugin(someData);
// This would lead to an error.
$("#someId").myOtherPlugin(someData);
// This would work.
```

 ## Static methods

### .build ( String _alias_ [ , Object _attributes_ = {} [ , Variable _children_ ] ] )
`$.build` allows you to create HTML elements on the fly. The first argument has to be an "alias", that is either the name of a HTML tag (such as `a` for links, `p` for paragraphs, etc.) or a user-defined name (see **$.maker** below). The second argument is an object containing all your elements' attributes (whose names must be camel-cased). You can create aliases for attributes (see **$.getter** and **$.setter** below). The third argument is an array containing all your element's children, would you want to populate it.
To create a simple link, with no explicit attributes and no children, just type:
```javascript
var link = $.build("a");
```
To create a link that actually points somewhere, type:
```javascript
var link = $.build("a",{href:"https://example.com"});
```
`$.build` returns your element wrapped inside a `$` instance, so you can do things like this:
```javascript
var link = $.build("a",{href:"https://example.com"}).appendTo(someOtherElement);
// You can then do whatever you want with your newly created element,
// such as setting its attributes or changing its appearance via CSS:
link
    .attr("target","_blank")
    .css("color","red");
```

### .css.getter ( String _alias_ , Function | String _getter_ )

### .css.setter ( String _alias_ , Function | String _getter_ )

### .document
`$.document` is a shortcut to `document.documentElement`.

### .get ( Element element , String alias )

### .getter ( String _alias_ , Function | String _getter_ )

### .head
`$.head` is a shortcut to your document's `<head>`.

### .isArray ( Any _value_ )
This function returns `true` if `value` is an `Array`, and `false` otherwise.

### .isArrayLike ( Any _value_ )

### .isBoolean ( Any _value_ )
This function returns `true` if `value` is a `Boolean`, and `false` otherwise.

### .isDate ( Any _value_ )
This function returns `true` if `value` is a `Date`, and `false` otherwise.

### .isDefined ( Any _value_ )

### .isElement ( Any _value_ )

### .isFalsey ( Any _value_ )

### .isNaN ( Any _value_ )
This function returns `true` if `value` equals `NaN`, and `false` otherwise.

### .isNode ( Any _value_ )

### .isNull ( Any _value_ )

### .isNumber ( Any _value_ )
This function returns `true` if `value` is a `Number`, and `false` otherwise.

### .isObject ( Any _value_ )

### .isRegExp ( Any _value_ )
This function returns `true` if `value` is a `RegExp`, and `false` otherwise.

### .isString ( Any _value_ )
This function returns `true` if `value` is a `String`, and `false` otherwise.

### .isTruthy ( Any _value_ )

### .isUndefined ( Any _value_ )

### .make ( String _alias_ )
This function creates HTML elements.

### .maker ( String _alias_ , Function | String _maker_ )
This function helps you define custom functions for creating HTML elements.

### .ready ( Function _callback_ [ , Array _arguments_ = [] [ , Any _context_ = root ] ] )
This function allows you to call a function when the DOM is ready. It's very simliar to jQuery's `$(document).ready(...)`, except it allows you to pass arguments and a context to your handler.

### .set ( Element _element_, String _alias_, Variable _value_ )

### .setter ( String _alias_ , Function | String _setter_ )

## Instance methods

### .addClass ( String _classes_ )
This one is self-explanatory: it allows you to add a classe (or a space-separated list of classes) to a collection of elements.
```javascript
var links = $("a");
links.addClass("red blinking");
```

### .after ( [ Collection | Element | Maker | String _stuff_ ] )

### .append ( )

### .appendTo ( )

### .attr ( String attribute [ , Any _value_ ] )

### .before ( )

### .children ( [ Boolean _childNodes_ = false ] )
This method returns a new **bla** object containing all children of all elements in a collection. If `childNodes` is set to `true`, the returned collection will contain all child _nodes_ (i.e. text nodes, etc.).
```javascript
var listItems = $("ul").children();
```
If you want to get only the children (or child nodes) of the first element in the collection, use `.first` like so:
```javascript
var firstListItems = $("ul").first().children();
```

### .click ( [ Function _handler_ ] )

### .css ( String _property_ , Variable _value_ )

### .data
This functions allows you to get and set `data-` attributes. There are three ways you can use it.

#### .data ( String _key_ [ , Any _value_ ] )
When you pass only a `key`, the function will return the value of the corresponding `data-` key attribute. If you pass a `value`, it will _set_ the corrresponding attribute.

#### .data ( Array _keys_ )

#### .data ( Object _data_ )

### .delegate ( String _event_ [ , Function test ] , Function handler )

### .each ( Function _iterator_ [ , Boolean _wrapped_ = false ] )

### .filter

### .fire ( String _event_ )

### .first ( [ Numner _count_ = 1 ] )
This method returns the first (or the first `count`) element(s) if the collection.

### .hover ( Function _inHandler_ , Function _outHandler_ )

### .html ( [ String _html_ ] )

### .off ( String _event_ [ , Function _handler_ ] )

### .on ( String _event_ , Function _handler_ )

### .prepend ( )

### .prependTo ( )

### .remove ( )

### .removeClass ( String _classes_ )

### .toggleClass ( String _classes_ )
