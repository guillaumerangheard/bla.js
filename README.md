# bla.js

**bla.js** is a compact front-end javascript library for common tasks, with jQuery-like API.
Its works on IE9+ and modern browsers, as it uses (a version of) <a target="_blank" href="https://github.com/guillaumerangheard/Qjs">Q</a> as its selector engine.

## Constructor
$ ( Collection | Element | String [ , Element | String ] )

## How to write plugins

## Static plugin
A static plugin is one that adds functionalities to `$`, but not to its instances. To do so, one has to modify `$.api`, like so:
```javascript
// Adding a static plugin:
$.myPlugin = function(){
    // Do things.
};

// Adding an instance plugin:
$.api.myOtherPlugin = function(){
    // Do things.
    // Don't forget to add "return this" at the end of your code,
    // so as to make it chainable, much like you would when writing
    // a jQuery plugin:
    return this;
};
```
Please note that your plugin must be created _before_ you first call `$()`.

 ## Static methods

.bakeGetter

.bakeSetter

### .build ( String _alias_ [ , Object _attributes_ = {} [ , Variable _children_ ] ] )

### .css.getter ( String _alias_ , Function | String _getter_ )

### .css.setter ( String _alias_ , Function | String _getter_ )

### .document

### .get ( Element element , String alias )

### .getter ( String _alias_ , Function | String _getter_ )

### .head

### .isArray ( Any _value_ )

### .isArrayLike ( Any _value_ )

### .isBoolean ( Any _value_ )

### .isDate ( Any _value_ )

### .isDefined ( Any _value_ )

### .isElement ( Any _value_ )

### .isFalsey ( Any _value_ )

### .isNaN ( Any _value_ )

### .isNode ( Any _value_ )

### .isNull ( Any _value_ )

### .isNumber ( Any _value_ )

### .isObject ( Any _value_ )

### .isRegExp ( Any _value_ )

### .isString ( Any _value_ )

### .isTruthy ( Any _value_ )

### .isUndefined ( Any _value_ )

.make ( String _alias_ )

.maker ( String _alias_ , Function | String _maker_ )

### .plug ( String alias , Function plugin )

### .publish ( String _event_ [ Object _data_ = {} ] )

.ready ( Function _callback_ [ , Array _arguments_ = [] [ , Any _context_ = root ] ] )

.set ( Element _element_, String _alias_, Variable _value_ )

.setter ( String _alias_ , Function | String _setter_ )

### .subscribe ( String _event_ , Function handler [ , Any _context_ = root ] )

### .unsubscribe ( String _event_ )

## Instance methods

### .addClass ( String _classes_ )

### .after

### .append

### .appendTo

### .attr

### .before

### .children

### .click ( [ Function _handler_ ] )

### .css ( String _property_ , Variable _value_ )

### .data

### .delegate ( String _event_ [ , Function test ] , Function handler )

### .each ( Function _iterator_ [ , Boolean _wrapped_ = false ] )

### .filter

### .fire ( String _event_ )

### .first ( [ Numner _count_ = 1 ] )

### .hover ( Function _inHandler_ , Function _outHandler_ )

### .html ( [ String _html_ ] )

### .off ( String _event_ [ , Function _handler_ ] )

### .on ( String _event_ , Function _handler_ )

### .prepend

### .prependTo

### .remove ( )

### .removeClass ( String _classes_ )

### .toggleClass ( String _classes_ )
