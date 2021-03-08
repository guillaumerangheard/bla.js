# bla.js

**bla.js** is a small, modular front-end javascript library for common tasks.
Its works on IE9+ and modern browsers, as it uses [Q](https://github.com/guillaumerangheard/Qjs) as its selector engine.

## Constructor
$ ( Collection | Element | String [ , Element | String ] )

## Static methods

### .api

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

.ready ( Function _callback_ [ , Array _arguments_ = [] [ , Any _context_ = root ] ] )

.set ( Element _element_, String _alias_, Variable _value_ )

.setter ( String _alias_ , Function | String _setter_ )

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

### .each

### .filter

### .hover ( Function _inHandler_ , Function _outHandler_ )

### .html ( [ String _html_ ] )

### .prepend

### .prependTo

### .remove ( )

### .removeClass ( String _classes_ )

### .toggleClass ( String _classes_ )
