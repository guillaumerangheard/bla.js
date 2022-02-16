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
		append:function(a){
			
		},
		
		// [x.x] this $.api.appendTo ( Bla elements )
		// [x.x] this $.api.appendTo ( Collection elements )
		// [0.2] this $.api.appendTo ( Element element )
		appendTo:function(a){
			
		},
		
		// [x.x] Object $.api.attr ( Array keys )
		// [x.x] this   $.api.attr ( Object pairs )
		// [x.x] String $.api.attr ( String key )
		// [x.x] this   $.api.attr ( String key , Any value )
		
		// [0.2] Bla  $.api.before ( )
		// [0.2] this $.api.before ( Array builder )
		// [x.x] this $.api.before ( Bla elements )
		// [x.x] this $.api.before ( Collection elements )
		// [0.2] this $.api.before ( Element element )
		// [0.2] this $.api.before ( String content )
		before:function(a){
			
		},
		
		// [0.2] Object $.api.bRect ( )
		bRect:function(){
			
		},
		
		// [0.2] Bla $.api.children ( )
		// [x.x] Bla $.api.children ( [ Boolean andChildNodes = false ] )
		children:function(){
			
		},
		
		// [x.x] this $.api.click ( )
		// [0.2] this $.api.click ( Function handler )
		click:function(h){
			
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
		each:function(f,w){
			
		},
		
		// [0.1] Bla $.api.filter ( Function test )
		// [x.x] Bla $.api.filter ( Object test )
		// [0.1] Bla $.api.filter ( String test )
		filter:function(t){
			
		},
		
		// [0.1] Bla $.api.find ( Function test )
		// [x.x] Bla $.api.find ( Object test )
		// [0.1] Bla $.api.find ( String test )
		find:function(t){
			
		},
		
		// [0.1] this $.api.fire ( String event [ , Any data ] )
		fire:function(e,d){
			
		},
		
		// [0.1] Bla $.api.first ( [ Number count = 1 ] )
		first:function(c){
			
		},
		
		// [x.x] Boolean $.api.hasClass ( Array classes )
		// [0.1] Boolean $.api.hasClass ( String class )
		// [x.x] Boolean $.api.hasClass ( String classes )
		hasClass:function(c){
			
		},
		
		// [x.x] this $.api.hover ( Function inHandler [ , Function outHandler ] )

		// [0.1] String $.api.html ( )
		// [0.2] this   $.api.html ( String content )
		// Requires: $.isString
		html:function(c){
			
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
		
		// [x.x] this $.api.on ( String event , Function handler )
		
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
		push:function(a){
			
		},
		
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
	
	W.$=$;
	
})(document,Object,window);
