(function(D,O,W){
	
	var _A=true,
		
		// [0.1] Element _C ( )
		// [0.2] Element _C ( Bla elements )
		// [0.1] Element _C ( Element context )
		// [0.1] Element _C ( String selector )
		// Requires: $.is$ , $.isElement , $.isString
		_C=function(a){
			if($.isString(a)){
				a=D.querySelector(a);
			}
			else if($.is$(a)&&a.length){
				a=a[0];
			}
			return $.isElement(a)?a:D;
		},
		
		// [0.2] Void _H ( Event e )
		// Requires: $.on
		_H=function(e){
			var o=$.on[e.type];
			if(o){
				var i=-1,
					l=o.length,
					t=e.target;
				while(++i<l){
					if(o[i].test?o[i].test(t):true){
						o[i].callback.call(t,e);
					}
				}
			}
		},
		
		// [0.1] String _S ( Any value )
		_S=function(a){
			return O.prototype.toString.call(a);
		},
		
		// [0.1] $ ( )
		// [0.1] $ ( String selector [ , Element context = document ] )
		// [0.1] $ ( String selector [ , String selector ] )
		// Requires: $.api , $.build , $.extend , $.is$ , $.isArray , $.isString
		// Requires:
		$=function(a,b){
			if(!$.is$(this)){
				return new $(a,b);
			}
			if(_A){
				$.extend($.prototype,$.api);
				_A=false;
			}
			this.length=0;
			this.push(
				$.isString(a)?
					_C(b).querySelectorAll(a):
					($.isArray(a)?
					 	$.build.apply(W,a):
					 	a)
			);
		};
	
	// [0.2] Boolean $.all ( ArrayLike collection , Function test [ , Any context = this ] )
	// Requires: $.isArrayLike
	$.all=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||this;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(!f.call(c,a[i],i,a)){
					return false;
				}
			}
			return true;
		}
		return undefined;
	};
	
	// [x.x] Boolean $.all.right ( ArrayLike collection , Function test [ , Any context = this ] )
	
	// [0.2] Boolean $.any ( ArrayLike collection , Function test [ , Any context = this ] )
	// Requires: $.isArrayLike
	$.any=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||this;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					return true;
				}
			}
			return false;
		}
		return undefined;
	};
	
	// [x.x] Boolean $.any.right ( ArrayLike collection , Function test [ , Any context = this ] )
	
	$.api={
		
		// [x.x] this $.api.addClass ( Array classes )
		// [0.1] this $.api.addClass ( String class )
		// [x.x] this $.api.addClass ( String classes )
		addClass:function(a){
			if(this.length){
				var c,
					i=-1,
					l=this.length;
				if(this[0].classList){
					while(++i<l){
						this[i].classList.add(a);
					}
				}
				else{
					while(++i<l){
						c=this[i].className;
						if(c.indexOf(a)<0){
							c+=" "+a;
							this[i].className=c;
						}
					}
				}
			}
			return this;
		},
		
		// [0.2] Bla  $.api.after ( )
		// [0.2] this $.api.after ( Array builder )
		// [x.x] this $.api.after ( Bla elements )
		// [x.x] this $.api.after ( Collection elements )
		// [0.2] this $.api.after ( Element element )
		// [0.2] this $.api.after ( String content )
		after:function(a){
			
		},
		
		// [0.1] this $.api.append ( Array builder )
		// [x.x] this $.api.append ( Bla elements )
		// [x.x] this $.api.append ( Collection elements )
		// [0.2] this $.api.append ( Element element )
		// [0.2] this $.api.append ( Function builder )
		//       -> Element builder ( Element parent , Number index )
		// [0.2] this $.api.append ( String content )
		// Requires: $.typeOf
		append:function(a){
			if(this.length){
				var i=-1,
					l=this.length;
				if($.isElement(a)){
					l--;
					while(++i<l){
						this[i].appendChild(a.cloneNode(true));
					}
					this[l].appendChild(a);
				}
				else{
					switch($.typeOf(a)){
						case"Array":
							while(++i<l){
								this[i].appendChild($.build.apply(W,a));
							}
							break;
						case"Function":
							while(++i<l){
								this[i].appendChild(a.call(this[i],i));
							}
							break;
						case"String":
							while(++i<l){
								this[i].insertAdjacentHTML("beforeend",a);
							}
					}
				}
			}
			return this;
		},
		
		// [x.x] this $.api.appendTo ( Bla elements )
		// [x.x] this $.api.appendTo ( Collection elements )
		// [0.2] this $.api.appendTo ( Element element )
		appendTo:function(a){
			
		},
		
		// [x.x] Object $.api.attr ( Array keys )
		// [x.x] this   $.api.attr ( Object pairs )
		// [0.2] String $.api.attr ( String key )
		// [0.2] this   $.api.attr ( String key , Any value )
		attr:function(a,b){
			
		},
		
		// [0.2] Bla  $.api.before ( )
		// [0.2] this $.api.before ( Array builder )
		// [x.x] this $.api.before ( Bla elements )
		// [x.x] this $.api.before ( Collection elements )
		// [0.2] this $.api.before ( Element element )
		// [0.2] this $.api.before ( String content )
		before:function(a){
			
		},
		
		// [0.2] Object $.api.bRect ( )
		// Requires: $.bRect
		bRect:function(){
			
		},
		
		// [0.2] Bla $.api.children ( )
		// [x.x] Bla $.api.children ( [ Boolean andChildNodes = false ] )
		children:function(){
			
		},
		
		// [x.x] this $.api.click ( )
		// [0.2] this $.api.click ( Function handler )
		click:function(h){
			return this.on("click",h);
		},
		
		// [x.x] Object $.api.css ( Array keys )
		// [x.x] this   $.api.css ( Object pairs )
		// [0.2] String $.api.css ( String key )
		// [0.2] this   $.api.css ( String key , Any value )
		css:function(a,b){
			
		},
		
		// [x.x] Object $.api.data ( Array keys )
		// [x.x] this   $.api.data ( Object pairs )
		// [x.x] Any    $.api.data ( String key )
		// [x.x] this   $.api.data ( String key , Any value )
		data:function(a,b){
			
		},
		
		// [0.1] this $.api.each ( Function iterator [ , Boolean wrapped = false ] )
		// Requires: $.identity
		each:function(f,w){
			if(this.length){
				var i=-1,
					l=this.length;
				w=w||$.identity;
				while(++i<l){
					if(false===f.call(w(this[i]),i)){
						break;
					}
				}
			}
			return this;
		},
		
		// [0.1] Bla $.api.filter ( Function test )
		// [x.x] Bla $.api.filter ( Object test )
		// [0.1] Bla $.api.filter ( String test )
		// Requires: $.make.test
		filter:function(t){
			var r=$();
			if(this.length){
				t=$.make.test(t);
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
		
		// [0.1] Bla $.api.find ( Function test )
		// [x.x] Bla $.api.find ( Object test )
		// [0.1] Bla $.api.find ( String test )
		// Raquires: $.make.test
		find:function(t){
			if(this.length){
				t=$.make.test(t);
				var i=-1,
					l=this.length;
				while(++i<l){
					if(t(this[i])){
						return $(this[i]);
					}
				}
			}
			return $();
		},
		
		// [0.1] this $.api.fire ( String event [ , Any data ] )
		fire:function(e,d){
			if(this.length){
				var c=$.isDefined(d)?new CustomEvent(e,{detail:d}):new Event(e),
					i=-1,
					l=this.length;
				while(++i<l){
					this[i].dispatchEvent(c);
				}
			}
			return this;
		},
		
		// [0.1] Bla $.api.first ( [ Number count = 1 ] )
		first:function(c){
			var r=$();
			if(this.length){
				if(c){
					c=this.length<c?this.length:c;
					var i=-1;
					while(++i<c){
						r.push(this[i]);
					}
				}
				else{
					r.push(this[0]);
				}
			}
			return r;
		},
		
		// [x.x] Boolean $.api.hasClass ( Array classes )
		// [0.1] Boolean $.api.hasClass ( String class )
		// [x.x] Boolean $.api.hasClass ( String classes )
		hasClass:function(c){
			return this.length?
				(this[0].classList?
				 	this[0].classList.contains(c):
				 	-1<this[0].className.indexOf(c)):
				undefined;
		},
		
		// [x.x] this $.api.hover ( Function inHandler [ , Function outHandler ] )

		// [0.1] String $.api.html ( )
		// [0.2] this   $.api.html ( String content )
		// Requires: $.isString
		html:function(c){
			if($.isString(c)){
				if(this.length){
					var i=-1,
						l=this.length;
					while(++i<l){
						this[i].innerHTML=c;
					}
				}
				return this;
			}
			return this.length?this[0].innerHTML:"";
		},
		
		// [x.x] Boolean $.api.isHeading ( )
		
		// [x.x] Boolean $.api.isH1 ( )
		
		// [x.x] Boolean $.api.isH2 ( )
		
		// [x.x] Boolean $.api.isH3 ( )
		
		// [x.x] Boolean $.api.isH4 ( )
		
		// [x.x] Boolean $.api.isH5 ( )
		
		// [x.x] Boolean $.api.isH6 ( )
		
		// [0.1] Bla $.api.last ( [ Number count = 1 ] )
		last:function(c){
			
		},
		
		// [x.x] this $.api.off ( String event [ , Function handler ] )
		
		// [0.1] this $.api.on ( String event , Function handler [ , Any options ] )
		on:function(e,h,o){
			if(this.length){
				var i=-1,
					l=this.length:
				while(++i<l){
					this[i].addEventListener(e,h,o);
				}
			}
			return this;
		},
		
		// [0.1] this $.api.prepend ( Array builder )
		// [x.x] this $.api.prepend ( Bla elements )
		// [x.x] this $.api.prepend ( Collection elements )
		// [0.2] this $.api.prepend ( Element element )
		// [0.2] this $.api.prepend ( Function builder )
		//       -> Element builder ( Element parent , Number index )
		// [0.2] this $.api.prepend ( String content )
		prepend:function(a){
			
		},
		
		// [x.x] this $.api.prependTo ( Bla elements )
		// [x.x] this $.api.prependTo ( Collection elements )
		// [0.2] this $.api.prependTo ( Element element )
		prependTo:function(a){
			
		},
		
		// [0.1] this $.api.push ( ArrayLike elements )
		// [0.1] this $.api.push ( Element element )
		push:(function(){
			var _p=function(a){
					if($.isElement(a)){
						this[this.length]=a;
						this.length++;
					}
				};
			return function(a){
				$.isArrayLike(a)?$.each(a,_p,this):_p.call(this,a);
				return this;
			};
		})(),
		
		// [x.x] this $.api.remove ( )
		
		// [x.x] this $.api.removeClass ( Array classes )
		// [0.1] this $.api.removeClass ( String class )
		// [x.x] this $.api.removeClass ( String classes )
		
		// [x.x] this $.api.replaceClass ( String oldClass , String newClass )
		
		// [x.x] this $.api.setClass ( String class )
		
		// [0.2] this $.api.toggleClass ( String class )
		toggleClass:function(c){
			
		}
		
	};
	
	// [0.1] $.document
	$.document=D.documentElement;
	
	// [0.1] Void $.each ( ArrayLike collection , Function iterator [ , Any context = this ] )
	// Requires: $.isArrayLike
	$.each=function(a,f,c){
		if($.isArrayLike(a)){
			c=c||this;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [0.1] Void $.each.key ( Any object , Function iterator [ , Any context = this ] )
	//       -> Any iterator ( String key , Any value , object )
	// Requires: $.keys
	$.each.key=function(o,f,c){
		c=c||this;
		var i=-1,
			k=$.keys(o),
			l=k.length;
		while(++i<l){
			if(false===f.call(c,k[i],o[k[i]],o)){
				break;
			}
		}
	};
	
	// [0.2] Void $.each.value ( Any object , Function iterator [ , Any context = this ] )
	//       -> Any iterator ( Any value , String key , object )
	// Requires: $.keys
	$.each.value=function(o,f,c){
		c=c||this;
		var i=-1,
			k=$.keys(o),
			l=k.length;
		while(++i<l){
			if(false===f.call(c,o[k[i]],k[i],o)){
				break;
			}
		}
	};
	
	// [0.1] Object $.extend ( Object extended , Object extender [ , Boolean preserve = false ] )
	// Requires: $.keys
	$.extend=(function(){
		var _s=function(k,v){
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
	
	// [0.1] Boolean $.isArray ( Any value )
	// Requires: _S
	$.isArray=function(a){
		return "[object Array]"===_S(a);
	};
	
	// [0.1] Boolean $.isArrayLike ( Any value )
	// Requires: $.isNumber
	$.isArrayLike=function(a){
		return a?$.isNumber(a.length):false;
	};
	
	// [0.2] Boolean $.isAudio ( Any value )
	$.isAudio=function(a){
		return a?"AUDIO"===a.tagName:false;
	};
	
	// [x.x] Boolean $.isBoolean ( Any value )
	
	// [0.2] Boolean $.isCollection ( Any value )
	// Requires: _S
	$.isCollection=function(a){
		var s=_S(a);
		return "[object HTMLCollection]"===b||"[object NodeList]"===b||a instanceof $;
	};
	
	// [x.x] Boolean $.isDate ( Any value )
	
	// [0.1] Boolean $.isDefined ( Any value )
	// Requires: $.isUndefined
	$.isDefined=function(a){
		return !$.isUndefined(a);
	};
	
	// [0.1] Boolean $.isElement ( Any value )
	$.isElement=function(a){
		return a?1===a.nodeType:false;
	};
	
	// [x.x] Boolean $.isFalsey ( Any value )
	
	// [0.2] Boolean $.isFragment ( Any value )
	$.isFragment=function(a){
		return a?11===a.nodeType:false;
	};
	
	// [0.1] Boolean $.isFunction (Any value )
	// Requires: _S
	$.isFunction=function(a){
		return "[object Function]"===_S(a);
	};
	
	// [0.1] Boolean $.isNaN ( Any value )
	$.isNaN=function(a){
		return a!==a;
	};
	
	// [x.x] Boolean $.isNode ( Any value )
	
	// [x.x] Boolean $.isNull ( Any value )
	
	// [x.x] Boolean $.isNullish ( Any value )
	
	// [0.1] Boolean $.isNumber ( Any value )
	// Requires: _S
	$.isNumber=function(a){
		return "[objet Number]"===_S(a);
	};
	
	// [0.1] Boolean $.isObject ( Any value )
	$.isObject=function(a){
		return O(a)===a;
	};
	
	// [0.2] Boolean $.isPlainObject ( Any value )
	// Requires: _S
	$.isPlainObject=function(a){
		return "[object Object]"===_S(a);
	};
	
	// [0.1] Boolean $.isString ( Any value )
	// Requires: _S
	$.isString=function(a){
		return "[object String]"===_S(a);
	};

	// [0.2] Boolean $.isTextNode ( Any value )
	$.isTextNode=function(a){
		return a?3===a.nodeType:false;
	};

	// [0.1] Boolean $.isUndefined ( Any value )
	$.isUndefined=function(a){
		return a===void 0;
	};
	
	// [0.1] Array $.keys ( Any value )
	$.keys=O.keys||function(a){
		var r=[];
		for(var k in a){
			if(a.hasOwnProperty(k)){
				r.push(k);
			}
		}
		return r;
	};
	
	// [0.1] Element $.make ( String alias )
	$.make=function(a){
		return $.make[a]?$.make[a]():D.createElement(a);
	};
	
	// [x.x] Function $.make.getter
	
	// [0.2] Function $.make.test ( Function test )
	// [x.x] Function $.make.test ( Object test )
	// [0.2] Function $.make.test ( String test )
	$.make.test=function(t){
		
	};
	
	// [0.1] Function $.setter ( String alias )
	// [0.1] Function $.setter ( String alias , Function setter )
	// [0.1] Function $.setter ( String alias , String key )
	$.setter=funtion(a,b){
		
	};
	
	// [0.1] String $.toCamel ( String value )
	$.toCamel=(function(){
		var _a=/-([a-z])/g,
			_b=function(x,y){
				return y.toUpperCase();
			};
		return function(a){
			return (""+a).replace(_a,_b);
		};
	})();

	// [0.1] String $.toKebab ( String value )
	$.toKebab=(function(){
		var _a=/([A-Z])/g,
			_b=function(x,y){
				return "-"+y.toLowerCase();
			};
		return function(a){
			return (""+a).replace(_a,_b);
		};
	})();
	
	// [0.2] String $.typeOf ( Any value )
	// Requires: _S
	$.typeOf=function(a){
		var b=_S(a);
		return b.substring(8,b.length-1);
	};
	
	$.version={
		major:0,
		minor:2
	};
	
	// [0.2] Object $.viewport ( )
	// [0.2] Number $.viewport.height ( )
	// [0.2] Number $.viewport.width ( )
	$.viewport=(function(){
		var _h=function(){
				var a=$.document.clientHeight,
					b=W.innerHeight;
				return a<b?b:a;
			},
			_w=function(){
				var a=$.document.clientWidth,
					b=W.innerWidth;
				return a<b?b:a;
			},
			V=function(){
				return {
					width:_w(),
					height:_h()
				};
			};
		V.width=_w;
		V.height=_h;
		return V;
	})();
	
	W.$=$;
	
})(document,Object,window);
