(function(D,O,W){
		
		// [0.1.0] _A
	var _A=true,
		
	    // [0.1.0] Element _C ( )
		// [0.1.0] Element _C ( Element context )
		// [0.1.0] Element _C ( String selector )
		_C=function(a){
			a=$.isString(a)?D.querySelector(a):a;
			a=$.isArrayLike(a)?a[0]:a;
			return $.isElement(a)?a:D;
		},
		
		// [0.1.0] Void _E ( Event e )
		_E=function(e){
			var o=$.on[e.type];
			if(o){
				var i=-1,l=o.length,t=e.target;
				while(++i<l){
					if(o[i].test(t)){
						o[i].callback.call(t,e);
					}
				}
			}
		},
		
		// [0.1.0] String _S ( Any value )
		_S=function(a){
			return O.prototype.toString.call(a);
		},
		
		// [0.1.0] $ $ ( )
		// [0.1.0] $ $ ( Array builder )
		// [0.1.0] $ $ ( Element element )
		// [0.1.0] $ $ ( String selector )
		//// Requires: $.api , $.build , $.extend , $.is$ , $.isArray , $.isString , $.prototype.push
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
	
	// [0.1.1] Void $.after ( Number duration , Function callback [ , Array arguments = [] [ , Any context = window ] ] )
	// [x.x.x] Void $.after ( String duration , Function callback [ , Array arguments = [] [ , Any context = window ] ] )
	$.after=function(d,f,a,c){
		return setTimeout(function(){
			f.apply(c||W,a||[]);
		});
	};
	
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
	
	/*
	$.builder=function(){};
	
	$.css={
		get:function(){},
		getter:function(){},
		set:function(){},
		setter:function(){}
	};
	*/
	
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
	// [x.x.x] Void $.every ( Number duration , Function callback [ , Array arguments = [] [ , Any context = window ] ] )
	// [x.x.x] Void $.every ( String duration , Function callback [ , Array arguments = [] [ , Any context = window ] ] )
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
	
	// [0.1.0] Void $.fire ( String event [ , Any data ] )
	$.fire=function(a,b){
		var c=b?new CustomEvent(a,{detail:b}):new Event(a);
		W.dispatchEvent(c);
	};
	
	/*
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
	
	// [0.1.0] Element $.make ( String alias )
	$.make=function(a){
		return $.maker[a]?
			$.maker[a]():
			D.createElement(a);
	};
	
	// [0.1.0] Function $.make.test ( Function test )
	// [x.x.x] Function $.make.test ( Object test )
	// [0.1.0] Function $.make.test ( String test )
	$.make.test=function(a){
		if($.isFunction(a)){
			return a;
		}
		else if($.isString(a)){
			switch(a.charAt(0)){
				case"#":
					return new Function("e","return \""+a+"\"===e.id;");
				case".":
					return new Function("e",(
						$.document.classList?
							"return $.isElement(e)?e.classList.contains(\""+a.substr(1)+"\"):false;":
							(a.indexOf(" ")<0?
							 	"return $.isElement(e)?-1<e.className.indexOf(\""+a.substr(1)+"\"):false;":
							 	"if($.isElement(e)){"+
							 		"var c=e.className;"+
							 		"return $.all([\""+a.substr(1).split(" ").join("\",\"")+"\"],function(v){"+
							 			"return -1<c.indexOf(v);"+
							 		"});"+
							 	"}"+
							 	"return false;"
							)
					));
					
			}
		}
	};
	
	// [0.1.0] Function $.maker ( String alias )
	// [0.1.0] Function $.maker ( String alias , Function maker )
	// [0.1.0] Function $.maker ( String alias , String tagName )
	$.maker=function(a,b){
		if($.isFunction(b)){
			$.maker[a]=b;
		}
		else if($.isString(b)){
			$.maker[a]=new Function("return document.createElement(\""+b+"\");");
		}
		return $.maker[a];
	};
	
	// [0.1.0] Array $.map ( ArrayLike collection , Function mapper [ , Any context = window ] )
	$.map=function(a,f,c){
		var r=[];
		if($.isArrayLike(a)){
			c=c||W;
			var i=-1,l=a.length;
			while(++i<l){
				r.push(f.call(c,a[i],i,a));
			}
		}
		return r;
	};
	
	// [0.1.0] Void $.noop ( )
	$.noop=function(){};
	
	/*
	$.off
	*/
	
	// [0.1.0] Void $.on ( String events , Function handler )
	// [0.1.0] Void $.on ( String events , Function handler , Function test )
	// [x.x.x] Void $.on ( String events , Function handler , Object test )
	// [0.1.0] Void $.on ( String events , Function handler , String test )
	//// Requires: $.make.test
	//// Not to be confused with $.prototype.on!
	$.on=function(e,h,t){
		e=-1z.indexOf(" ")?e.plsit(" "):[e];
		var E,i=-1,l=e.length;
		while(++i<l){
			E=e[i];
			if(!$.on[E]){
				$.on[E]=[];
				W.addEventListener(E,_H,true);
			}
			$.on[E].push({
				test:$.make.test(t),
				callback:h
			});
		}
	};
	
	/*
	$.publish
	*/
	
	// [0.1.0] Void $.ready ( Function handler [ , Array arguments = [] [ , Any context = window ] ] )
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
	
	/*
	$.reduce
	$.scroll
	$.scroll.x
	$.scroll.y
	$.set
	$.setter
	$.subscribe
	$.Template
	$.toCamel
	$.toKebab
	$.typeOf
	*/
	
	// [0.1.0] Object $.version ( )
	$.version=(function(){
		var _v={major:0,minor:1,patch:0};
		return function(){
			return _v;
		};
	})();
	
	// [0.1.0] Object $.viewport ( )
	// [0.1.0] Number $.viewport.height ( )
	// [0.1.0] Number $.viewport.width ( )
	$.viewport=(function(){
		var _h=function(){
				var a=$.document.clientHeight,b=W.innerHeight;
				return a<b?b:a;
			},
			_w=function(){
				var a=$.document.clientWidth,b=W.innerWidth;
				return a<b?b:a;
			},
			V=function(){
				return {
					width:_w(),
					height:_h()
				};
			};
		V.height=_h;
		V.width=_w;
		return V;
	})();
	
	$.api={
		
		// [0.1.0] $ $.prototype.addClass ( String classes )
		addClass:function(a){
			if($.document.classList){
				return this.each(function(){
					this.classList.add(a);
				});
			}
			else{
				a=a.split(" ");
				return this.each(function(){
					var b=this.className;
					$.each(a,function(v){
						if(b.indexOf(v)<0){
							b+=v;
						}
					});
					this.className=b;
				});
			}
		},
		
		/*
		after
		
		append
		
		appendTo
		
		before
		
		// [0.1.0] Object $.prototype.bRect ( )
		bRect
		
		// [x.x.x] $ $.prototype.children ( [ Boolean childNodes = false ] )
		children
		
		click
		
		// [x.x.x] $      $.prototype.css ( Object pairs )
		// [x.x.x] String $.prototype.css ( String key )
		// [x.x.x] $      $.prototype.css ( String key , Any value )
		css
		
		// [x.x.x] Object $.prototype.data ( Array keys )
		// [x.x.x] $      $.prototype.data ( Object pairs )
		// [x.x.x] String $.prototype.data ( String key )
		// [x.x.x] $      $.prototype.data ( String key , Any value )
		data
		
		delegate
		*/
		
		// [0.1.0] $ $.prototype.each ( Function iterator [ , Boolean wrapped = false ] )
		//// Requires: $.identity
		each:function(f,w){
			if(this.length){
				var i=-1,l=this.length,p=w?$:$.identity;
				while(++i<l){
					if(false===f.call(p(this[i]),i)){
						break;
					}
				}
			}
			return this;
		},
		
		// [0.1.0] $ $.prototype.filter ( Function test )
		// [x.x.x] $ $.prototype.filter ( Object test )
		// [0.1.0] $ $.prototype.filter ( String test )
		//// Requires: $.make.test
		filter:function(t){
			var r=$();
			if(this.length){
				t=$.make.test(t);
				var i=-1,l=this.length;
				while(++i<l){
					if(t(this[i])){
						r.push(this[i]);
					}
				}
			}
			return r;
		},
		
		// [0.1.0] $ $.prototype.find ( Function test )
		// [x.x.x] $ $.prototype.find ( Object test )
		// [0.1.0] $ $.prototype.find ( String test )
		//// Requires: $.make.test
		find:function(t){
			var r=$();
			if(this.length){
				t=$.make.test(t);
				var i=-1,l=this.length;
				while(++i<l){
					if(t(this[i])){
						r.push(this[i]);
						break;
					}
				}
			}
			return r;
		}
		
		/*
		// [x.x.x] $ $.prototype.fire ( String event )
		// [x.x.x] $ $.prototype.fire ( String event , Object data )
		fire
		
		// [0.1.0] $ $.prototype.first ( [ Number count = 1 ] )
		first
		
		// [0.1.0] Boolean $.prototype.hasClass ( String classes )
		hasClass
		
		// [x.x.x] $ $.prototype.hover ( )
		// [x.x.x] $ $.prototype.hover ( Function inHandler [ , Function outHandler ] )
		hover
		
		// [0.1.0] String $.prototype.html ( )
		// [x.x.x] $      $.prototype.html ( String content )
		html
		
		// [x.x.x] $ $.prototype.last ( [ Number count = 1 ] )
		last
		
		off
		
		// [0.1.0] $ $.prototype.on ( String events , Function handler )
		on
		
		prepend
		prependTo
		push
		remove
		
		// [0.1.0] $ $.prototype.removeClass ( String classes )
		removeClass
		
		replaceClass
		
		// [0.1.0] $ $.prototype.toggleClass ( String classes )
		toggleClass
		
		*/
	};
	
	W.$=$;
})(document,Object,window);
