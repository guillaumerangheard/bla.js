# bla.js

**bla.js** is a compact front-end javascript library for common tasks, with a jQuery-like API.
Its works on IE9+ and modern browsers.

## $ ( [ String _selector_ [ , Element _context_ = document | String _selector_ ] ] )

## Writing plugins
**bla.js** is very easy to write plugins for. There are two types of plugins one can write: **static plugins** and **instance plugins**.

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
An instance plugin is, as the name implies, one that adds functionalities to all instances of `$`, that is to `$.prototype`. To create one, one only needs to attach their code to the `$.api` object, like so:
```javascript
$.api.myOtherPlugin = function(){
    // Do things.
    // Don't forget to add "return this" at the end of your code,
    // so as to make it chainable, much like you would when writing
    // a jQuery plugin:
    return this;
};
```
Please note that instance plugins must be declared _before_ your first call to `$()`. Instance plugins can only be called from an instance of `$`:
```javascript
$.myOtherPlugin(someData);
// This would lead to an error.
$("#someId").myOtherPlugin(someData);
// This would work.
```

### Instance plugins (alternate method)
Since **bla** 0.2, one can also use the `$.plug` function.
```javascript
$.plug("myOtherPlugin",function(){
    // Your awesome code.
});
```

## Static methods and properties

### [0.2] .all ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )
`$.all` return `true` if all items in `collection` pass `test`, and `false` otherwise.

### [0.2] .any ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )
`$.any` return `true` if any item in `collection` passes `test`, and `false` otherwise.

### [0.1] .build ( String _alias_ [ , Object _attributes_ = {} [ , Variable _children_ ] ] )
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

### [0.2] .css.get ( Element _element_ , String _alias_ )

### [0.2] .css.getter ( String _alias_ [ , Function _getter_ | String _property_ ] )

### [0.2] .css.set ( Element _element_ , String _alias_ , Any _value_ )

### [0.2] .css.setter ( String _alias_ [ , Function _setter_ | String _property_ ] )

### [0.2] .decode ( String _value_ [ , String _code_ = `uri` ] )

### [0.2] .decoder ( String _alias_ [ , Function _decoder_ ] )

### [0.1] .document
`$.document` is a shortcut to `document.documentElement`.

### [0.1] .each ( ArrayLike _collection_ , Function _iterator_ [ , Any _context_ = `this` ] )

### [0.1] .each.key ( Object _object_ , Function _iterator_ [ , Any _context_ = `this` ] )

### [0.2] .encode ( String _value_ [ , String _code_ = `uri` ] )

### [0.2] .encoder ( String _alias_ [ , Function _encoder_ ] )

### [0.1] .extend ( Object _extended_ , Object _extender_ [ , Boolean _preserve_ = `false` ] )

### [0.2] .filter ( ArrayLike _collection_ , Function _test_ [ , Any _context_ = `this` ] )

### [0.2] .fire ( String _event_ [ , Any _data_ ] )

### [0.1] .head
`$.head` is a shortcut to your document's `<head>`.

### [0.1] .identity ( Any _value_ )

### [0.1] .is$ ( Any _value_ )

### [0.3] .isArguments ( Any _value_ )

### [0.1] .isArray ( Any _value_ )

### [0.1] .isArrayLike ( Any _value_ )

### [0.2] .isBoolean ( Any _value_ )

### [0.2] .isCollection ( Any _value_ )

### [0.3] .isDate ( Any _value_ )

### [0.1] .isDefined ( Any _value_ )

### [0.1] .isElement ( Any _value_ )

### [0.3] .isError ( Any _value_ )

### [0.2] .isFalsey ( Any _value_ )

### [0.2] .isFragment ( Any _value_ )

### [0.2] .isFunction ( Any _value_ )

### [0.1] .isNaN ( Any _value_ )

### [0.3] .isNode ( Any _value_ )

### [0.3] .isNull ( Any _value_ )

### [0.3] .isNullish ( Any _value_ )

### [0.1] .isNumber ( Any _value_ )

### [0.1] .isObject ( Any _value_ )

### [0.2] .isPlainObject ( Any _value_ )

### [0.3] .isRegExp ( Any _value_ )

### [0.1] .isString ( Any _value_ )

### [0.2] .isTextNode ( Any _value_ )

### [0.2] .isTruthy ( Any _value_ )

### [0.1] .isUndefined ( Any _value_ )

### [0.1] .keys ( Any _value_ )

### [0.1] .make ( String _alias_ )
This function creates HTML elements.

### [0.2] .make.test ( Function | String _test_ )

### [0.1] .maker ( String _alias_ [ , Function | String _maker_ ] )
This function helps you define custom functions for creating HTML elements.

### [0.2] .map ( ArrayLike _value_ , Function _mapper_ [ , Any _context_ = `this` ] )

### [0.3] .none ( ArrayLike _collection_ , Function _test_ | , Any _context_ = `this`] )

### [0.1] .noop ( )

### [0.2] .obj ( )

### [0.1] .off ( String _event_ )

### [0.1] .on ( String _event_ , Function _handler_ [ , Function | String _test_ ] )

### [0.1] .plug ( String _alias_ , Function _plugin_ [ , Boolean _overwrite_ = `false` ] )
This function allows one to safely add an _instance_ plugin to **bla.js**.

### [0.2] .ready ( Function _callback_ )
This function allows you to call a function when the DOM is ready. It's very simliar to jQuery's `$(document).ready(...)`, except it allows you to pass arguments and a context to your handler.

### [0.2] .reduce ( ArrayLike _collection_ , Any _baseValue_ , Function _iterator_ [ , Any _context_ = `this` ] )

### [0.3] .str ( Any _value_ )

### [0.1] .toCamel ( String _value_ )

### [0.1] .toKebab ( String _value_ )

### [0.2] .typeOf ( Any _value_ )

### [0.1] .version

## Instance methods

### [0.1] .addClass ( String _class_ )
This one is self-explanatory: it allows you to add a classe (or a space-separated list of classes) to a collection of elements.
```javascript
var links = $("a");
links.addClass("red");
```

### [0.2] .after ( [ Array | Element | String _stuff_ ] )

### [0.1] .append ( Array | Element | Function | String _stuff_ )

### [0.2] .appendTo ( Element _element_ )

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
