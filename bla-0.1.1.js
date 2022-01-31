(function(D,O,W){
	var _A=true,
		
		_C=function(a){
			a=$.isString(a)?D.querySelector(a):a;
			a=$.isArrayLike(a)?a[0]:a;
			return $.isElement(a)?a:D;
		},
		
		_S=function(a){
			return O.prototype.toString.call(a);
		},
		
		// [0.1.0] $ $ ( )
		// [0.1.0] $ $ ( Array builder )
		// [0.1.0] $ $ ( Element element )
		// [0.1.0] $ $ ( String selector )
		$=function(a,b){
			if(!$.is$(this)){
				return new $(a,b);
			}
			if(_A){
				$.extend($.prototype,$.api);
				_A=false;
			}
			this.length=0;
			this.push($.isString(a)?
				_C(b).querySelector(a):
				($.isArray(a)?
					$.build.apply(W,a):
					a)
			);
		};
	
	/*
	$.after
	*/
	
	// [0.1.0] Boolean $.all ( ArrayLike collection , Function test [ , Any context = window ] )
	//// Requires: $.isArrayLike
	$.all=function(a,t,c){
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,l=a.length;
			while(++i<l){
				if(!t.call(c,a[i],i,a)){
					return false;
				}
			}
			return true;
		}
	};
	
	// [0.1.0] Boolean $.any ( ArrayLike collection , Function test [ , Any context = window ] )
	//// Requires: $.isArrayLike
	$.any=function(a,t,c){
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,l=a.length;
			while(++i<l){
				if(t.call(c,a[i],i,a)){
					return true;
				}
			}
			return false;
		}
	};
	
	// [0.1.0] Element $.build ( String alias [ , Object attributes = {} [ , Array children = [] ] ] )
	//// Requires: $.each , $.each.key , $.isArray , $.isObject , $.isString , $.make , $.set
	$.build=function(a,b,c){
		var n=$.make(a);
		if($.isObject(b)){
			$.each.key(b,function(v,k){
				$.set(n,k,v);
			});
		}
		if($.isArray(c)){
			$.each(c,function(v){
				if($.isArray(v)){
					n.appendChild($.build.apply(W,v));
				}
				else if($.isString(v)){
					n.insertAdjacentHTML("beforeend",v);
				}
			});
		}
		return n;
	};
	
	// [0.1.0] Element $.document
	$.document=D.documentElement;
	
	// [0.1.0] Void $.each ( ArrayLike collection , Function iterator [ , Any context = window ] )
	//// Requires: $.isArrayLike
	$.each=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,l=a.length;
			while(++i<l){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [0.1.0] Void $.each.key ( Object object , Function iterator [ , Any context = window ] )
	$.each.key=function(o,f,c){
		c=c||W;
		var i=-1,k=$.keys(o),l=k.length;
		while(++i<l){
			if(false===f.call(c,o[k[i]],k[i],o)){
				break;
			}
		}
	};
	
	/*
	$.every
	*/
	
	// [0.1.0] Any $.extend ( Any extended , Object extender [ , Boolean preserve = false ] )
	//// Requires: $.each.key
	$.extend=(function(){
		var _s=function(v,k){
				this[k]=v;
			};
		return function(a,b,p){
			var r;
			if(p){
				r={};
				$.each.key(a,_s,r);
			}
			else{
				r=a;
			}
			$.each.key(b,_s,r);
			return r;
		};
	})();
	
	/*
	$.fire
	$.get
	$.getter
	*/
	
	// [0.1.1] Element $.head
	$.head=D.head||D.querySelector("head");
	
	// [0.1.0] value $.identity ( Any value )
	$.identity=function(a){
		return a;
	};
	
	// [0.1.0] Boolean $.is$ ( Any value )
	$.is$=function(a){
		return a instanceof $;
	};
	
	// [0.1.0] Boolean $.isArguments ( Any value )
	$.isArguments=function(a){
		return "[object Arguments]"===_S(a)||(a!=null&&"object"===typeof a&&"callee" in a);
	};
	
	// [0.1.0] Boolean $.isArray ( Any value )
	$.isArray=function(a){
		return "[object Array]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isArrayLike ( Any value )
	//// Requires: $.isNumber
	$.isArrayLike=function(a){
		return $.isNumber(a.length);
	};
	
	// [0.1.0] Boolean $.isBoolean ( Any value )
	$.isBoolean=function(a){
		return true===a||false===a||"[object Boolean]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isDate ( Any value )
	$.isDate=function(a){
		return "[object Date]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isDefined ( Any value )
	//// Requires: $.isUndefined
	$.isDefined=function(a){
		return !$.isUndefined(a);
	};
	
	// [0.1.0] Boolean $.isElement ( Any value )
	//// Requires: $.isObject
	$.isElement=function(a){
		return $.isObject(a)&&1===a.nodeType;
	};
	
	// [0.1.0] Boolean $.isError ( Any value )
	$.isError=function(a){
	return "[object Error]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isFunction ( Any value )
	$.isFunction=function(a){
		return "[object Function]"===_S(a)||"function"===typeof a;
	};
	
	// [0.1.0] Boolean $.isNaN ( Any value )
	$.isNaN=function(a){
		return a!==a;
	};
	
	// [0.1.0] Boolean $.isNode ( Any value )
	//// Requires: $.isObject
	$.isNode=function(a){
		return $.isObject(a)&&0<a.nodeType;
	};
	
	// [0.1.0] Boolean $.isNull ( Any value )
	$.isNull=function(a){
		return null===a||"[object Null]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isNumber ( Any value )
	$.isNumber=function(a){
		return a===a&&"[object Number]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isObject ( Any value )
	$.isObject=function(a){
		return O(a)===a;
	};
	
	// [0.1.0] Boolean $.isRegExp ( Any value )
	$.isRegExp=function(a){
		return "[object RegExp]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isString ( Any value )
	$.isString=function(a){
		return "[object String]"===_S(a);
	};
	
	// [0.1.0] Boolean $.isUndefined ( Any value )
	$.isUndefined=function(a){
		return a===void 0;
	};
	
	// [0.1.1] Array $.keys ( Any value )
	$.keys=O.keys||function(a){
		var r=[];
		for(var k in a){
			if(a.hasOwnProperty(k)){
				r.push(k);
			}
		}
		return r;
	};
	
	/*
	$.make
	$.make.test
	$.maker
	$.map
	*/
	
	// [0.1.0] Void $.noop ( )
	$.noop=function(){};
	
	/*
	$.off
	$.on
	$.publish
	$.ready
	$.set
	$.setter
	$.subscribe
	$.toCamel
	$.toKebab
	*/
	
	$.api={
		/*
		addClass
		after
		append
		appendTo
		before
		children
		click
		css
		data
		delegate
		each
		filter
		find
		fire
		first
		hasClass
		hover
		html
		off
		on
		prepend
		prependTo
		push
		remove
		removeClass
		replaceClass
		toggleClass
		*/
	};
	
	W.$=$;
})(document,Object,window);
