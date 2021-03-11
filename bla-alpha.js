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
		
		// [0.1.0] $ $ ( Array builder )
		// [0.1.0] $ $ ( String selector [ , Element context = document ] )
		//// Requires: build , extend , is$ , isArray , isString , api.push
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
	
	// [x.x.x] Function $.bakeTest ( Object match )
	// [x.x.x] Function $.bakeTest ( String path )
	
	// [0.1.0] Boolean $.build ( String alias [ , Object attributes = {} [ , Variable child1 , ... , Variable childN ] ] )
	//// Requires: each.key , isArray , isObject , isString , make , set
	$.build=function(a,b){
		var n=$.make(a);
		if($.isObject(b)){
			$.each.key(b,function(v,k){
				$.set(n,k,v);
			});
		}
		if(2<arguments.length){
			var A=arguments,
				i=1,
				l=A.length;
			while(++i<l){
				if($.isString(A[i])){
					n.insertAdjacentHTML("beforeend",A[i]);
				}
				else if($.isArray(A[i])){
					n.appendChild($.build.apply(W,A[i]);
				}
			}
		}
		return n;
	};
	
	// [x.x.x] Function $.builder ( Array builder )
	
	// [0.1.0] $.document
	$.document=D.documentElement;
	
	// [0.1.0] Void $.each ( Collection collection , Function iterator [ , Any context = window ] )
	//// Boolean iterator ( Variable value , Number index , Collection collection )
	//// Requires: isArrayLike
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
	$.each.key=function(o,f,c){
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
	//// Requires: each.key
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
	
	// [x.x.x] Variable $.identity ( Any value )
	
	// [0.1.0] Boolean $.is$ ( Any value )
	$.is$=function(a){
		return a instanceof $;
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
	
	// [x.x.x] Boolean $.isDefined ( Any value )
	
	// [0.1.0] Boolean $.isElement ( Any value )
	$.isElement=function(a){
		return a&&1===a.nodeType;
	};
	
	// [0.1.0] $.isNaN ( Any value )
	$.isNaN=function(a){
		return a!==a;
	};
	
	// [0.1.0] Boolean $.isNumber ( Any value )
	//// Requires: isNaN
	$.isNumber=function(a){
		return !$.isNaN(a)&&"[object Number]"===_tS(a);
	};
	
	// [0.1.0] Boolean $.isObject ( Any value )
	$.isObject=function(a){
		return O(a)===a;
	};
	
	// [0.1.0] Boolean $.isString ( Any value )
	$.isString=function(a){
		return "[object String]"===_tS(a);
	};
	
	// [x.x.x] $.isUndefined ( Any value )
	
	// [x.x.x] Array $.map ( Collection collection , Function mapper [ Any context = window ] )
	//// mapper ( Variable value , Number index , Collection collection )
	//// Requires: isArrayLike
	
	// [0.1.0] Element $.make ( String alias )
	$.make=function(a){
		return $.make[a]?$.make[a]():D.createElement(a);
	};
	
	// [0.1.0] Function $.maker ( String alias , Function maker )
	// [0.1.0] Function $.maker ( String alias , String tag )
	/// Requires: isString , make
	$.maker=function(a,b){
		$.make[a]=$.isString(b)?
			new Function("return document.createElement(\""+b+"\");"):
			b;
		return $.make[a];
	};
	
	// [0.1.0] Void $.set ( Any value , String key , Any value )
	$.set=function(a,k,v){
		if($.set[k]){
			$.set[k](a,v);
		}
		else{
			a[k]=v;
		}
	};
	
	// [x.x.x] Function $.setter ( String alias , Function setter )
	//// setter ( Any objectToSet , Any value )
	// [x.x.x] Function $.setter ( String alias , String key )
	$.setter=function(a,b){
		$.set[a]=$.isString(b)?
			new Function("e","v","e."+b+"=v;"):
			b;
		return $.set[a];
	};
	
	$.api={
		
		// [x.x.x] $ $.prototype.addClass ( String classes )
		
		// [x.x.x] $ $.prototype.after ( )
		// [x.x.x] $ $.prototype.after ( $ collection )
		// [x.x.x] $ $.prototype.after ( Array builder )
		// [x.x.x] $ $.prototype.after ( String content )
		
		// [x.x.x] $ $.prototype.append ( Array builder )
		// [x.x.x] $ $.prototype.append ( $ elements )
		// [x.x.x] $ $.prototype.append ( Collection elements )
		// [x.x.x] $ $.prototype.append ( Element element )
		// [x.x.x] $ $.prototype.append ( String content )
		
		// [x.x.x] $ $.prototype.appendTo ( $ elements )
		// [x.x.x] $ $.prototype.appendTo ( Collection elements )
		// [x.x.x] $ $.prototype.appendTo ( Element element )
		
		// [x.x.x] $ $.prototype.before ( )
		// [x.x.x] $ $.prototype.before ( $ collection )
		// [x.x.x] $ $.prototype.before ( Array builder )
		// [x.x.x] $ $.prototype.before ( String content )
		
		// [x.x.x] $ $.prototype.children ( [ Boolean childNodes = false ] )
		
		// [x.x.x] $ $.prototype.click ( [ Function handler ] )
		
		// [x.x.x] $ $.prototype.css ( String property [ , Any value ] )
		// [x.x.x] $ $.prototype.css ( Object properties )
		
		// [x.x.x] $ $.prototype.clone ( [ Boolean deep = false ] )
		
		// [x.x.x] $ $.prototype.delegate ( String event [ , Tester test ] , Function handler )
		
		// [x.x.x] $ $.prototype.each ( Function iterator [ , Boolean wrapped = false ] )
		
		// [x.x.x] Boolean $.prototype.hasClass ( String classes )
		
		// [x.x.x] $ $.prototype.prepend ( Array builder )
		// [x.x.x] $ $.prototype.prepend ( $ elements )
		// [x.x.x] $ $.prototype.prepend ( Collection elements )
		// [x.x.x] $ $.prototype.prepend ( Element element )
		// [x.x.x] $ $.prototype.prepend ( String content )
		
		// [x.x.x] $ $.prototype.prepend ( $ elements )
		// [x.x.x] $ $.prototype.prepend ( Collection elements )
		// [x.x.x] $ $.prototype.prepend ( Element element )
		
		// [0.1.0] $ $.prototype.push ( )
		
		// [x.x.x] $ $.prototype.remove ( )
		
		// [x.x.x] $ $.prototype.removeClass ( String classes )
		// [x.x.x] $ $.prototype.toggleClass ( String classes )
		
	};
	
	W.$=$;
	
})(document,Object,window);
