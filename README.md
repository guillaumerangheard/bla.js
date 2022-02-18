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

## Static methods and properties

### Boolean $.all ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )
`$.all` return `true` if all items in `collection` pass `test`, and `false` otherwise.

### Boolean $.any.right ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )
`$.all.right` works the same way as `$.all`, except it parses `collection` backwards.

### Boolean $.any ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )
`$.any` return `true` if any item in `collection` passes `test`, and `false` otherwise.

### Boolean $.any.right ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )
`$.any.right` works the same way as `$.any`, except it parses `collection` backwards.

### Element $.build ( String _alias_ [ , Object _attributes_ = {} [ , Variable _children_ ] ] )
`$.build` allows you to create HTML elements on the fly. The first argument has to be an "alias", that is either the name of a HTML tag (such as `a` for links, `p` for paragraphs, etc.) or a user-defined name (see **$.maker** below). The second argument is an object containing all your elements' attributes (whose names must be camel-cased). You can create aliases for attributes (see **$.getter** and **$.setter** below). The third argument is an array containing all your element's children, would you want to populate it.
To create a simple link, with no explicit attributes and no children, just type:
```javascript
var link = $.build("a");
```
To create a link that actually points somewhere, type:
```javascript
var link = $.build("a",{href:"https://example.com"});
```

To create a paragraph, just type:
```javascript
var p = $.build("p",{},"Hello, world.");
```

### Element $.document
`$.document` is a shortcut to `document.documentElement`.

### Void $.each ( ArrayLike _collection_ , Function _iterator_ [ , Any _context_ = this ] )

### Void $.each.key ( Object _object_ , Function _iterator_ [ , Any _context_ = this ] )

### Object $.extend ( Object _extended_ , Object _extender_ [ , Boolean _preserve_ = `false` ] )

### _value_ $.identity ( Any _value_ )

### Boolean $.is$ ( Any _value_ )

### Boolean $.isArguments ( Any _value_ )

### Boolean $.isArray ( Any _value_ )

### Boolean $.isArrayLike ( Any _value_ )

### Boolean $.isAudio ( Any _value_ )

### Boolean $.isBoolean ( Any _value_ )

### Boolean $.isCollection ( Any _value_ )

### Boolean $.isDate ( Any _value_ )

### Boolean $.isDefined ( Any _value_ )

### Boolean $.isElement ( Any _value_ )

### Boolean $.isError ( Any _value_ )

### Boolean $.isFunction ( Any _value_ )

### Boolean $.isNaN ( Any _value_ )

### Boolean $.isNode ( Any _value_ )

### Boolean $.isNull ( Any _value_ )

### Boolean $.isNullish ( Any _value_ )

### Boolean $.isNumber ( Any _value_ )

### Boolean $.isObject ( Any _value_ )

### Boolean $.isPlainObject ( Any _value_ )

### Boolean $.isRegExp ( Any _value_ )

### Boolean $.isString ( Any _value_ )

### Boolean $.isTextNode ( Any _value_ )

### Boolean $.isUndefined ( Any _value_ )

### .css.getter ( String _alias_ , Function | String _getter_ )

### .css.setter ( String _alias_ , Function | String _getter_ )

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

### Element $.make ( String _alias_ )
This function creates HTML elements.

### Function $.make.test ( Function | String _test_ ] )

### Function $.maker ( String _alias_ [ , Function | String _maker_ ] )
This function helps you define custom functions for creating HTML elements.

### Array $.map ( ArrayLike _value_ , Function _mapper_ [ , Any _context_ = `this` ] )

### Void $.noop ( )

### $ $.off ( String _event_ )

### $ $.on ( String _event_ , Function _handler_ [ , Function | String _test_ ] )

### $ $.plug ( String _alias_ , Function _plugin_ [ , Boolean _overwrite_ = `false` ] )
This function allows one to safely add an _instance_ plugin to **bla.js**.

### Void $.ready ( Function _callback_ [ , Array _arguments_ = [] [ , Any _context_ = root ] ] )
This function allows you to call a function when the DOM is ready. It's very simliar to jQuery's `$(document).ready(...)`, except it allows you to pass arguments and a context to your handler.

### Object $.scroll ( )

### $ $.scroll ( [ Number _x_ , ] Number _y_ ] )

### $ | Number $.scroll.x ( [ Number _x_ ] )

### $ | Number $.scroll.y ( [ Number _x_ ] )

### Void $.set ( Element _element_, String _alias_, Any _value_ )

### Function $.setter ( String _alias_ [ , Function | String _setter_ ] )

### String $.toCamel ( String _value_ )

### String $.toKebab ( String _value_ )

### String $.typeOf ( Any _value_ )

### Object $.version

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
