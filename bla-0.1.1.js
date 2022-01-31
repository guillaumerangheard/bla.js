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
	$.all
	$.any
	$.build
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
	$.every
	*/
	
	// [0.1.0] Any $.extend ( Any extended , Object extender [ , Boolean preserve = false ] )
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
	
	/*
	$.isArguments
	$.isArray
	$.isArrayLike
	$.isBoolean
	$.isDate
	$.isDefined
	$.isElement
	$.isError
	$.isFunction
	$.isNaN
	$.isNode
	$.isNull
	$.isNumber
	$.isObject
	$.isRegExp
	$.isString
	$.isUndefined
	*/
	
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
