(function(D,O,W){
	var _api=true,
		
		_ctx=function(a){
			a=$.isString(a)?D.querySelector(a):a;
			a=$.isArrayLike(a)?a[0]:a;
			return $.isElement(a)?a:D;
		},
		
		_k=O.keys||function(a){
			var r=[];
			for(var k in a){
				if(a.hasOwnProperty(k)){
					r.push(k);
				}
			}
			return r;
		},
		
		_tS=function(a){
			return O.prototype.toString.call(a);
		},
		
		/*
		$ v0.1.1
		Based on DOMtastic
		var _s=/^[.#]?[\w-]*$/;
		var q=function(s,c){
			if(_s.test(s)){
				switch(s.charAt(0)){
					case"#":return c.getElementById(s.substr(1));
					case".":return c.getElementsByClassName(s.substr(1));
					default:return c.getElementsByTagName(s);
				}
			}
			return c.querySelectorAll(s);
		}
		*/
		
		// [0.1.0] $ $ ( Array builder )
		// [0.1.0] $ $ ( String selector [ , Element context = document ] )
		//// Requires: $.build , $.extend , $.is$ , $.isArray , $.isString , $.prototype.push
		$=function(a,b){
			if(!$.is$(this)){
				return new $(a,b);
			}
			if(_api){
				$.extend($.prototype,$.api);
				_api=false;
			}
			this.length=0;
			this.push(
				$.isString(a)?
					_ctx(b).querySelector(a):
					($.isArray(a)?
						$.build.apply(W,a):
					 	a
					)
			);
		};
	
	// [0.1.0] Boolean $.all ( Collection collection , Function test [ , Any context = window ] )
	//// Requires: $.isArrayLike
	$.all=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(!f.call(c,a[i],i,a)){
					return false;
				}
			}
			return true;
		}
	};
	
	// [0.1.0] Boolean $.any ( Collection collection , Function test [ , Any context = window ] )
	//// Requires: $.isArrayLike
	$.any=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					return true;
				}
			}
			return false;
		}
	};
	
	// [0.1.0] Function $.bakeTest ( Function test )
	// [0.1.0] Function $.bakeTest ( String test )
	// [x.x.x] Function $.bakeTest ( Object test )
	//// Requires: $.all , $.document , $.each.key , $.get , $.isElement , $.isFunction , $.isString , $.map
	$.bakeTest=function(a){
		if($.isFunction(a)){
			return a;
		}
		if($.isObject(a)){
			var k=_k(a);
			return new Function("e","return "+$.map(k,function(v){
				return "e."+v+"==="+a[v];
			}).join("&&")+";");
		}
		if($.isString(a)){
			switch(a.charAt(0)){
				case"#":
					return new Function("e","return \""+a.substr(1)+"\"===e.id;");
				case".":
					if($.document.classList){
						return new Function("e","return $.isElement(e)?e.classList.contains(\""+a.substr(1)+"\"):false;");
					}
					else{
						return new Function("e",a.indexOf(" ")<0?
							"return $.isElement(e)?-1<e.className.indexOf(\""+a.substr(1)+"\");":
							"if($.isElement(e)){var c=e.className;return $.all([\""+
							a.substr(1).split(" ").join("\",\"")+
							"\"],function(v){return -1<c.indexOf(v);});}");
					}
				case"<":
					return new Function("e","return \""+a.substring(1,a.length-2).toUpperCase()+"\"===a.tagName;");
				default:
					return new Function("e","return $.get(e,\""+a+"\");");
			}
		}
		return function(){return true;};
	};
	
	// [0.1.0] Boolean $.build ( String alias [ , Object attributes = {} [ , Array children = [] ] ] )
	//// Requires: $.eachKey , $.isArray , $.isObject , $.isString , $.make , $.set
	$.build=function(a,b,c){
		var n=$.make(a);
		if($.isObject(b)){
			$.eachKey(b,function(v,k){
				$.set(n,k,v);
			});
		}
		if($.isArray(c)){
			$.each(c,function(v){
				if($.isString(v)){
					n.insertAdjacentHTML("beforeend",v);
				}
				else if($.isArray(v)){
					n.appendChild($.build.apply(W,v));
				}
			});
		}
		return n;
	};
	
	// [alpha] Function $.builder ( String alias [ , Object attributes = {} [ , Array children = [] ] ] )
	$.builder=function(a,b,c){
		return function(){
			return $.build.call(W,a,b,c);
		};
	};
	
	// [alpha] Void $.delegate ( String event , Function handler )
	// [alpha] Void $.delegate ( String event , Function handler , Function test )
	// [alpha] Void $.delegate ( String event , Function handler , Object test )
	// [alpha] Void $.delegate ( String event , Function handler , String test )
	//// Requires: $.bakeTest
	//// Not to be confused with $.prototype.delegate!
	$.delegate=function(e,h,t){
		t=$.bakeTest(t);
		D.addEventListener(e,function(E){
			E=E.target;
			if(t.call(E)){
				h.call(E);
			}
		});
	};
	
	// [0.1.0] $.document
	$.document=D.documentElement;
	
	// [0.1.0] Void $.each ( Collection collection , Function iterator [ , Any context = window ] )
	//// Boolean iterator ( Variable value , Number index , Collection collection )
	//// Requires: $.isArrayLike
	$.each=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [0.1.0] Void $.each.key ( Object object , Function iterator [ , Any context = window ] )
	//// iterator ( Variable value , String key , Object object )
	$.eachKey=function(o,f,c){
		c=c||W;
		var i=-1,
			k=_k(o),
			l=k.length;
		while(++i<l){
			if(false===f.call(c,o[k[i]],k[i],o)){
				break;
			}
		}
	};
	
	// [0.1.0] Void $.extend ( Any extended , Object extender [ , Boolean preserve = false ] )
	//// Requires: $.eachKey
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
					
	// [0.1.0] Variable $.get ( Any value , String key )
	//// To do: Add (pseudo-)paths along the lines of "key1.key2.1.3.key3".
	$.get=function(a,k){
		return $.get[k]?$.get[k](a):a[k];
	};
	
	// [0.1.0] Function $.getter ( String alias , Function getter )
	//// getter ( Any objectToGetValueFrom )
	// [0.1.0] Function $.getter ( String alias , String key )
	$.getter=function(a,b){
		$.get[a]=$.isString(b)?
			new Function("e","return e."+b+";"):
			b;
		return $.get[a];
	};
	
	// [0.1.0] $.head
	//// This is a shortcut to the DOM's <head> element.
	$.head=D.head||D.querySelector("head");
	
	// [0.1.0] Variable $.identity ( Any value )
	//// This function returns its first parameter as is.
	$.identity=function(a){
		return a;
	};
	
	// [0.1.0] Boolean $.is$ ( Any value )
	$.is$=function(a){
		return a instanceof $;
	};
	
	// [0.1.0] Boolean $.isArguments ( Any value )
	$.isArguments=function(a){
		return "[object Arguments]"===_tS(a)||(a!=null&&"object"===typeof a&&"callee" in a);
	};
	
	// [0.1.0] Boolean $.isArray ( Any value )
	$.isArray=function(a){
		return "[object Array]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isArrayLike ( Any value )
	//// Requires: isNumber
	$.isArrayLike=function(a){
		return $.isNumber(a.length);
	};
	
	// [0.1.0] Boolean $.isBoolean ( Any value )
	$.isBoolean=function(a){
		return true===a||false===a||"[object Boolean]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isDate ( Any value )
	$.isDate=function(a){
		return "[object Date]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isDefined ( Any value )
	//// Requires: $.isUndefined
	$.isDefined=function(a){
		return !$.isUndefined(a);
	};
	
	// [0.1.0] Boolean $.isElement ( Any value )
	$.isElement=function(a){
		return $.isObject(a)&&1===a.nodeType;
	};
	
	// [0.1.0] Boolean $.isError ( Any value )
	$.isError=function(a){
		return "[object Error]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isFunction ( Any value )
	$.isFunction=function(a){
		return "[object Function]"===_tS(a)||"function"===typeof a;
	};
	
	// [0.1.0] Boolean $.isNaN ( Any value )
	$.isNaN=function(a){
		return a!==a;
	};
	
	// [0.1.0] Boolean $.isNode ( Any value )
	$.isNode=function(a){
		return $.isObject(a)&&0<a.nodeType;
	};
	
	// [x.x.x] Boolean $.isNull ( Any value )
	$.isNull=function(a){
		return null===a||"[object Null]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isNumber ( Any value )
	//// Requires: isNaN
	$.isNumber=function(a){
		return a===a&&"[object Number]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isObject ( Any value )
	$.isObject=function(a){
		return O(a)===a;
	};
	
	// [x.x.x] Boolean $.isRegExp ( Any value )
	//// This function returns true if `value` is a RegExp, and false otherwise.
	$.isRegExp=function(a){
		return "[object RegExp]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isString ( Any value )
	$.isString=function(a){
		return "[object String]"===_tS(a);
	};
	
	// [x.x.x] Boolean $.isUndefined ( Any value )
	$.isUndefined=function(a){
		return a===void 0;
	};
	
	// [0.1.0] Array $.map ( Collection collection , Function mapper [ Any context = window ] )
	//// mapper ( Variable value , Number index , Collection collection )
	//// Requires: $.isArrayLike
	$.map=function(a,f,c){
		var r=[];
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,
				l=a.length;
			while(++i<l){
				r.push(f.call(W,a[i],i,a));
			}
		}
		return r;
	};
	
	// [0.1.0] Element $.make ( String alias )
	//// This function allows you to create HTMLElement's on the fly.
	$.make=function(a){
		return $.make[a]?
						 $.make[a]():
						 D.createElement(a);
	};
	
	// [0.1.0] Function $.maker ( String alias , Function maker )
	// [0.1.0] Function $.maker ( String alias , String tag )
	//// Requires: $.isString , $.make
	//// This function allows you to specify a custom maker.
	$.maker=function(a,b){
		$.make[a]=$.isString(b)?
			new Function("return document.createElement(\""+b+"\");"):
			b;
		return $.make[a];
	};
	
	// [0.1.0] Void $.noop ( )
	//// This utility function does nothing.
	$.noop=function(){};
	
	// [0.1.0] Void $.ready ( Function handler [ , Array arguments = [] [ , Any context = window ] ] )
	//// Requires: $.isFunction
	//// This function allows you to call a handler when the dom is ready.
	$.ready=function(h,a,c){
		if($.isFunction(h)){
			a=a||[];
			c=c||W;
			if(D.addEventListener){
				D.addEventListener("DOMContentLoaded",function(){
					return h.apply(c,a);
				});
			}
			else{
				D.attachEvent("onreadystatechange",function(){
					return h.apply(c,a);
				});
			}
		}
	};
	
	// [0.1.0] Void $.set ( Any value , String key , Any value )
	//// Default setter.
	$.set=function(a,k,v){
		if($.set[k]){
			$.set[k](a,v);
		}
		else{
			a[k]=v;
		}
	};
	
	// [0.1.0] Function $.setter ( String alias , Function setter )
	// [0.1.0] Function $.setter ( String alias , String key )
	//// setter ( Any objectToSet , Any value )
	//// Requires: $.isString
	//// This function allows you to specify a custom setter for a (pseudo-)property.
	$.setter=function(a,b){
		$.set[a]=$.isString(b)?
			new Function("e","v","e."+b+"=v;"):
			b;
		return $.set[a];
	};
	
	// [alpha] String $.toCamel ( String value )
	//// Requires: $.isString
	//// This functions allows to turn a string into camel-case.
	$.toCamel=function(a){
		return $.isString(a)?
			a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
			 .replace(/(\-|_|\s)+(.)?/g,function(a,b,c){
				return c?c.toUpperCase():"";
			 }):
			"";
	};
	
	// [alpha] String $.toKebab ( String value )
	//// Requires: $.isString
	//// This function allows you to turn a string into kebab-case.
	$.toKebab=function(a){
		return $.isString(a)?
			a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
			 .replace(/[_\s]+/g,"-")
			 .replace(/([A-Z])/g,"-$1")
			 .toLowerCase():
			"";
	};
	
	$.api={
		
		// [0.1.0] $ $.prototype.addClass ( String classes )
		//// Requires: $.each , $.prototype.each
		//// This functions allows you to add one (or more) class(es as a space-separated string)
		//// to all elements in the collection.
		addClass:function(a){
			if($.document.classList){
				return this.each(function(){
					this.classList.add(a);
				});
			}
			a=a.split(" ");
			return this.each(function(){
				var b=this.className;
				$.each(a,function(v){
					if(b.indexOf(v)<0){
						b+=""+v;
					}
				});
				this.className=b;
			});
		},
		
		// [x.x.x] $ $.prototype.after ( )
		// [x.x.x] $ $.prototype.after ( $ collection )
		// [x.x.x] $ $.prototype.after ( Array builder )
		// [x.x.x] $ $.prototype.after ( String content )
		after:function(a){
			
		},
		
		// [x.x.x] $ $.prototype.append ( Array builder )
		// [x.x.x] $ $.prototype.append ( $ elements )
		// [x.x.x] $ $.prototype.append ( Collection elements )
		// [x.x.x] $ $.prototype.append ( Element element )
		// [x.x.x] $ $.prototype.append ( String content )
		append:function(a){
			
		},
		
		// [x.x.x] $ $.prototype.appendTo ( $ elements )
		// [x.x.x] $ $.prototype.appendTo ( Collection elements )
		// [x.x.x] $ $.prototype.appendTo ( Element element )
		appendTo:function(a){
			
		},
		
		// [x.x.x] $ $.prototype.before ( )
		// [x.x.x] $ $.prototype.before ( $ collection )
		// [x.x.x] $ $.prototype.before ( Array builder )
		// [x.x.x] $ $.prototype.before ( String content )
		//// Requires: $.clone , $.each , $.is$ , $.isArray , $.isArrayLike , $.prototype.each
		before:function(a){
			
		},
		
		// [x.x.x] $ $.prototype.children ( [ Boolean childNodes = false ] )
		children:function(a){
			
		},
		
		// [x.x.x] $ $.prototype.click ( [ Function handler ] )
		click:function(h){
			
		},
		
		// [x.x.x] $ $.prototype.clone ( [ Boolean deep = false ] )
		clone:function(d){
			
		},
		
		// [x.x.x] Object $.prototype.css ( Array properties )
		// [x.x.x] $      $.prototype.css ( Object properties )
		// [x.x.x] String $.prototype.css ( String property )
		// [x.x.x] $      $.prototype.css ( String property , Variable value )
		css:function(p,v){
			
		},
		
		// [x.x.x] Object $.prototype.data ( Array keys )
		// [x.x.x] $      $.prototype.data ( Object pairs )
		// [x.x.x] String $.prototype.data ( String key )
		// [x.x.x] $      $.prototype.data ( String key , Any value )
		//// Requires: $.isArray , $.isObject , $.isString , $.toCamel , $.toDashed , $.prototype.each
		data:($.document.dataset?
			function(k,v){
				if(this.length){
					switch(arguments.length){
						case 1:
							var r;
							if($.isArray(k)){
								r={};
								$.each(k,function(a){
									a=$.toCamel(a);
									r[a]=this[0].dataset[a];
								});
							}
							else if($.isObject(k)){
								r=this;
								$.eachKey(k,function(a,b){
									this[0].dataset[$.toCamel(b)]=a;
								});
							}
							else if($.isString(k)){
								r=this[0].dataset[$.toCamel(k)]||"";
							}
							return r;
						case 2:
							k=$.toCamel(k);
							return this.each(function(){
								this.data[k]=""+v;
							});
					}
				}
				return this;
			}:
			function(k,v){
				
			}),
		
		// [x.x.x] $ $.prototype.delegate ( String event , Function handler )
		// [x.x.x] $ $.prototype.delegate ( String event , Function handler , Function test )
		// [x.x.x] $ $.prototype.delegate ( String event , Function handler , Object test )
		// [x.x.x] $ $.prototype.delegate ( String event , Function handler , String test )
		//// Requires: $.bakeTest
		delegate:function(e,h,t){
			
			return this;
		},
		
		// [0.1.0] $ $.prototype.each ( Function iterator [ , Boolean wrapped = false ] )
		//// Requires: $.identity
		each:function(f,w){
			if(this.length){
				var i=-1,
					l=this.length,
					p=w?$:$.identity;
				while(++i<l){
					if(false===f.call(p(this[i]),i)){
						break;
					}
				}
			}
			return this;
		},
		
		// [0.1.0] $ $.prototype.filter ( Function test )
		// [0.1.0] $ $.prototype.filter ( String test )
		// [x.x.x] $ $.prototype.filter ( Object test )
		//// Requires: $.bakeTest
		filter:function(t){
			var r=$();
			if(this.length){
				t=$.bakeTest(t);
				var i=-1,
					l=this.length;
				while(++i<l){
					if(t(this[i])){
						r.push(this[i]);
					}
				}
			}
			return r;
		},
		
		// [0.1.0] $ $.prototype.find ( Function test )
		// [0.1.0] $ $.prototype.find ( String test )
		// [x.x.x] $ $.prototype.find ( Object test )
		//// Requires: $.bakeTest
		find:function(t){
			var r=$();
			if(this.length){
				t=$.bakeTest(t);
				var i=-1,
					l=this.length;
				while(++i<l){
					if(t(this[i])){
						r.push(this[i]);
						break;
					}
				}
			}
			return r;
		},
		
		// [0.1.0] $ $.prototype.first ( [ Number count = 1 ] )
		//// Requires: $.prototype.push
		first:function(c){
			var r=$();
			if(this.length){
				c=c||1;
				c=c<=this.length?this.length:c;
				var i=-1;
				while(++i<c){
					r.push(this[i]);
				}
			}
			return r;
		},
		
		// [x.x.x] Boolean $.prototype.hasClass ( String classes )
		hasClass:function(c){
			
		},
		
		// [x.x.x] $ $.prototype.hover ( Function inHandler [ , Function outHandler ] )
		
		// [0.1.0] String $.prototype.html ( )
		// [x.x.x] $ $.prototype.html ( String content )
		html:function(){
			return this.length?this[0].innerHTML||"":"";
		},
		
		// [x.x.x] $ $.prototype.off ( String event [ , Function handler ] )
		off:function(e,h){
			
		},
		
		// [alpha] $ $.prototype.on ( String event , Function handler )
		on:function(e,h){
			return this.each(function(){
				this.addEventListener(e,h);
			});
		},
		
		// [x.x.x] $ $.prototype.prepend ( Array builder )
		// [x.x.x] $ $.prototype.prepend ( $ elements )
		// [x.x.x] $ $.prototype.prepend ( Collection elements )
		// [x.x.x] $ $.prototype.prepend ( Element element )
		// [x.x.x] $ $.prototype.prepend ( String content )
		prepend:function(a){
			
		},
		
		// [0.1.0] $ $.prototype.push ( )
		//// Requires: $.each , $.isArrayLike , $.isElement
		push:(function(){
			var _p=function(e){
					if($.isElement(e)){
						this[this.length]=e;
						this.length++;
					}
				};
			return function(a){
				$.each($.isArrayLike(a)?a:[a],_p,this);
				return this;
			};
		})(),
		
		// [x.x.x] $ $.prototype.remove ( )
		remove:function(){
			
		},
		
		// [x.x.x] $ $.prototype.removeClass ( String classes )
		//// Requires: 
		removeClass:function(c){
			return this.each(
				$.document.classList?
				function(){this.classList.remove(c)}:
				function(){
					this.className=$.map(
						this.className.split(" "),
						function(v){
							return -1<c.indexOf(v)?"":v;
						}
					).join(" ");
				}
			);
		},
		
		// [x.x.x] $ $.prototype.removeClass ( String classes )
		//// Requires: 
		replaceClass:function(c){
			
		},
		
		// [x.x.x] $ $.prototype.toggleClass ( String classes )
		toggleClass:function(c){
			
		}
		
	};
	
	W.$=$;
	
})(document,Object,window);
