(function(D,O,W){
	var _api=true,
		_ctx=function(a){
			a=$.isString(a)?D.querySelector(a):a;
			a=$.isArrayLike(a)?a[0]:a;
			return $.isElement(a)?a:D;
		},
		_tA=function(a){
			return $.isArrayLike(a)?a:[a];
		},
		_tS=function(a){
			return O.prototype.toString.call(a);
		},
		
		$=function(a,b){
			if(!$.is$(this)){
				return new $(a,b);
			}
			if(_api){
				$.extend($.prototype,$.api);
				_api=false;
			}
			this.length=0;
			this.push($.isString(a)?
				_ctx(b).querySelectorAll(a):
				($.isArray(a)?
				 $.build.apply(W,a):
				 a)
			);
		};
	
	// $.all ( ArrayLike collection , Function test [ , Any context = this ] )
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
		return false;
	};
	
	// $.bakeTest ( Function test )
	// $.bakeTest ( String test )
	$.bakeTest=function(a){
		if($.isFunction(a)){
			return a;
		}
		else if($.isString(a)){
			var r="return ";
			switch(a.charAt(0)){
				case"#":
					r+="\""+a.substr(1)+"\"===e.id;";
					break;
				case".":
					r+=$.document.classList?:
					"e.classList.contains(\""+a.substr(1)+"\");":
					"$.all([\""+a.substr(1).replace(/ /g,"\",\"")+"\"],function(v){return 0<this.indexOf(v);},e.className);";
					break;
				default:
					r="true;"
			}
			return new Function("e",r);
		}
		return function(){return true;};
	};
	
	// $.build ( String tag [ , Object attributes = {} [ , Array children ] ] )
	// $.build ( String tag [ , Object attributes = {} [ , String content ] ] )
	$.build(a,b,c){
		var n=$.make(a);
		if($.isObject(b)){
			$.eachKey(b,function(k,v){
				$.set(n,k,v);
			});
		}
		if($.isDefined(c)){
			$.each(_tA(c),function(v){
				if($.isString(v)){
					n.insertAdjacentHTML("beforend",v);
				}
				else if($.isArray(v)){
					n.appendChild($.build.apply(W,v));
				}
			});
		}
		return n;
	};
	
	// $.builder ( Array builder )
	$.builder=function(a){
		return function(){
			return $.build.apply(W,a);
		};
	};
	
	// $.clone ( Element element )
	$.clone=function(a){
		if($.isElement(a)){
			var r=a.cloneNode&&a.cloneNode(true);
			if(r&&0<r.id.length){
				r.id="";
			}
			return r;
		}
	};
	
	// $.document is a shorthand for document.documentElement, no more, no less.
	$.document=D.documentElement;
	
	// $.each ( ArrayLike collection , Function iterator [ , Any context = this ] )
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
	
	// $.eachKey ( Object object , Function iterator [ , Any context = this ] )
	$.eachKey=function(o,f,c){
		c=c||this;
		var i=-1,
			k=$.keys(o),
			l=k.length;
		while(++i<l){
			f.call(c,k[i],o[k[i]]);
		}
	};
	
	// $.extend ( Any extendee , Object extender [ Boolean preserve = false ] )
	$.extend=(function(){
		var _e=function(k,v){
				this[k]=v;
			};
		return function(a,b,p){
			var r;
			if(p){
				r={};
				$.eachKey(a,_e,r);
			}
			else{
				r=a;
			}
			$.eachKey(b,_e,r);
			return r;
		};
	})();
	
	// $.get ( Element element , String key )
	/// In the next iteration, add support for "paths".
	$.get=function(e,k){
		return $.get[k]?$.get[k](e):e[k];
	};
	
	// $.getter ( String alias , Function getter )
	// $.getter ( String alias , String key )
	$.getter=function(a,b){
		$.get[a]=$.isString(b)?new Function("e","return e."+b+";"):b;
		return $;
	};
	
	// $.identity ( Any value )
	$.identity=function(a){
		return a;
	};
	
	// $.is$ ( Any value )
	$.is$=function(a){
		return a instanceof $;
	}
	
	// $.isArray ( Any value )
	$.isArray=function(a){
		return "[object Array]"===_tS(a);
	};
	
	// $.isArrayLike ( Any value )
	$.isArrayLike=function(a){
		return $.isNumber(a.length);
	};
	
	// $.isDefined ( Any value )
	$.isDefined=function(a){
		return !$.isUndefined(a);
	};
	
	// $.isElement ( Any value )
	$.isElement=function(a){
		return a&&1===a.nodeType;
	};
	
	// $.isNaN ( Any value )
	$.isNaN=function(a){
		return a!==a;
	};
	
	// $.isNumber ( Any value )
	$.isNumber=function(a){
		return !$.isNaN(a)&&"[object Number]"===_tS(a);
	};
	
	// $.isObject ( Any value )
	$.isObject=function(a){
		return O(a)===a;
	};
	
	// $.isString ( Any value )
	$.isString=function(a){
		return "[object String]"===_tS(a);
	};
	
	// $.isUndefined ( Any value )
	$.isUndefined=function(a){
		return a===void 0;
	};
	
	// $.keys ( Object object )
	$.keys=O.keys||function(o){
		var r=[];
		for(var k in o){
			if(o.hasOwnProperty(k)){
				r.push(k);
			}
		}
		return r;
	};
	
	// $.make ( String tag )
	/// Would it be relevant to implement a 'wrapped' version ?
	$.make=function(a){
		return $.make[a]?$.make[a]():D.createElement(a);
	};
	
	// $.maker ( String alias , Function maker )
	// $.maker ( String alias , String tag )
	$.maker=function(a,b){
		$.make[a]=$.isString(b)?
				  new Function("return document.createElement(\""+b+"\");"):
				  b;
		return $;
	};
	
	// $.map ( ArrayLike collection , Function mapper [ , Any context = this ] )
	$.map=function(a,f,c){
		var r=[];
		if($.isArrayLike(a)){
			c=c||this;
			var i=-1,
				l=a.length;
			while(++i<l){
				r.push(f.call(c,a[i],i,a));
			}
		}
		return r;
	};
	
	// $.set ( Any element , String key , Any value )
	$.set=function(e,k,v){
		if($.set[k]){
			$.set[k](e,v);
		}
		else{
			e[k]=v;
		}
	};
	
	// $.setter
	$.setter=function(a,b){
		$.set[a]=$.isString(b)?
				 new Function("e","v","e."+b+"=v;"):
				 b;
		return $;
	};
	
	$.api={
		
		// $.prototype.addClass ( String classes )
		addClass:function(c){
			if($.document.classList){
				return this.each(function(){
					this.classList.add(c);
				});
			}
			c=c.split(" ");
			return this.each(function(){
				var d=this.className;
				$.each(c,function(v){
					if(d.indexOf(v)<0){
						d+=" "+v;
					}
				});
				this.className=d;
			});
		},
		
		// $.prototype.after ( )
		// $.prototype.after ( Array builder )
		// $.prototype.after ( Bla elements )
		// $.prototype.after ( Collection elements )
		// $.prototype.after ( String content )
		after:function(a){
			if(this.length){
				if($.isDefined(a)){
					if($.isString(a)){
						this.each(function(){
							this.insertAdjacentHTML("afterend",a);
						});
					}
					else if($.isElement(a)){
						this.each(function(i){
							var n=0<i?$.clone(a):a,
								p=this.parentNode,
								s=this.nextSibling;
							p&&(s?p.insertBefore(n,s):p.appendChild(n));
						});
					}
					else if($.isArray(a)){
						this.each(function(){
							var n=$.build.apply(W,a),
								p=this.parentNode,
								s=this.nextSibling;
							p&&(s?p.insertBefore(n,s):p.appendChild(n));
						});
					}
					/*
					Add support for Bla and collections.
					*/
					return this;
				}
				return $(this[0].nextSibling);
			}
		},
		
		// $.prototype.append ( Array builder )
		// $.prototype.append ( Bla elements )
		// $.prototype.append ( Collection elements )
		// $.prototype.append ( Element element )
		// $.prototype.append ( String content )
		append:function(a){
			if(this.length){
				if($.isElement(a)){
					this.each(function(i){
						this.appendChild(0<i?$.clone(a):a);
					});
				}
				else if($.isString(a)){
					this.each(function(){
						this.insertAdjacentHTML("beforeend",a);
					});
				}
				else if($.isArray(a)){
					this.each(function(){
						this.appendChild($.build.apply(W,a));
					});
				}
			}
			return this;
		},
		
		// $.prototype.appendTo ( Bla elements )
		// $.prototype.appendTo ( Collection elements )
		// $.prototype.appendTo ( Element element )
		appendTo:function(a){
			
		},
		
		// $.prototype.before
		before:function(a){
			if(this.length){
				if($.isDefined(a)){
					if($.isString(a)){
						this.each(function(){
							this.insertAdjacentHTML("beforebegin",a);
						});
					}
					else if($.isElement(a)){
						this.each(function(i){
							var p=this.parentNode;
							p&&p.insertBefore(0<i?$.clone(a):a,this);
						});
					}
					else if($.isArray(a)){
						this.each(function(){
							var p=this.parentNode;
							p&&p.insertBefore($.build.apply(W,a),this);
						});
					}
					/*
					/// Add support for instances of Bla and collections
					*/
					return this;
				}
				return this[0].previousSibling;
			}
		},
		
		childNodes:function(){},
		
		children:function(){},
		
		click:function(h){},
		
		css:function(a,b){},
		
		// $.prototype.each ( Function iterator [ , Boolean wrapped = false ] )
		each:function(f,w){
			if(this.length){
				var i=-1,
					l=this.length,
					p=w?
					  $:
					  $.identity;
				while(++i<l){
					if(false===f.call(p(this[i]),i)){
						break;
					}
				}
			}
			return this;
		},
		
		// $.prototype.hasClass ( String classes )
		hasClass:function(c){
			if(this.length){
				if(this[0].classList){
					return this[0].classList.contains(c);
				}
				var d=this[0].className;
				return $.all(c.split(" "),function(v){
					return -1<d.indexOf(v);
				});
			}
			return false;
		},
		
		// $.prototype.prepend ( Array builder )
		/// $.prototype.prepend ( Bla elements )
		/// $.prototype.prepend ( Collection elements )
		// $.prototype.prepend ( Element element )
		// $.prototype.prepend ( String content )
		prepend:function(a){
			return this.each(
				$.isString(a)?
				function(){
					this.insertAdjacentHTML("afterbegin",a);
				}:
				($.isElement(a)?
					function(i){
						var c=this.firstChild,
							n=i?$.clone(a):a;
						c&&this.insertBefore(n,c)||this.appendChild(n);
					}:
					($.isArray(a)?
						function(){
							var c=this.firstChild,
								n=$.build.apply(W,a);
							c&&this.insertBefore(n,c)||this.appendChild(n);
						}:
						function(){
							
						}
					)
				)
			);
		},
		
		prependTo:function(a){
			
		},
		
		// $.prototype.push ( Any value )
		push:(function(){
			var _p=function(e){
					if($.isElement(e)){
						this[this.length]=e;
						this.length++;
					}
				};
			return function(a){
				$.each(!$.isArrayLike(a)?[a]:a,_p,this);
				return this;
			};
		})(),
		
		remove:function(){},
		
		// $.prototype.removeClass ( String classes )
		removeClass:function(c){
			return this.each($.document.classList?
				function(){
					this.classList.remove(c);
				}:
				function(){
					this.className=$.map(this.className.split(" "),function(v){
						return -1<c.indexOf(v)?"":v;
					}).join(" ");
				});
		},
		
		toggleClass:function(c){
			return this.each(function(){
				$.toggleClass(this,c);
			});
		}
	};
	
	W.$=$;
})(document,Object,window);
