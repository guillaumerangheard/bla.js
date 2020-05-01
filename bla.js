(function(D,O,W){
	var _api=true,
		_ctx=function(a){a=$.isString(a)?D.querySelector(a):a;a=$.isArrayLike(a)?a[0]:a;return $.isElement(a)?a:D;},
		_tS=function(a){return O.prototype.toString.call(a);},
		
		$=function(a,b){
			if(!$.is$(this)){return new $(a,b);}
			if(_api){$.extend($.prototype,$.api);_api=false;}
			this.length=0;
			this.push($.isString(a)?_ctx(b).querySelectorAll(a):$.isArray(a)?$.build.apply(W,a):a);
		};
	
	$.all=function(a,f,c){if($.isArrayLike(a)){c=c||this;var i=-1,l=a.length;while(++i<l){if(!f.call(c,a[i],i,a)){return false;}}return true;}return false;};
	$.build(a,b,c){
		var n=$.make(a);
		if($.isObject(b)){$.bakeSetter(b)(n);}
		if($.isDefined(c)){
			
		}
		return n;
	};
	$.clone=function(a){if($.isElement(a)){var r=a.cloneNode&&a.cloneNode(true);if(r&&0<r.id.length){r.id="";}return r;}};
	$.document=D.documentElement;
	$.each=function(a,f,c){if($.isArrayLike(a)){c=c||this;var i=-1,l=a.length;while(++i<l){if(false===f.call(c,a[i],i,a)){break;}}}};
	$.eachKey=function(o,f,c){c=c||this;var i=-1,k=$.keys(o),l=k.length;while(++i<l){f.call(c,k[i],o[k[i]]);}};
	$.extend=function(a,b,p){var r;if(p){r={};$.eachKey(a,function(k,v){r[k]=v;});}else{r=a;}$.eachKey(b,function(k,v){r[k]=v;});return r;};
	$.identity=function(a){return a;};
	$.is$=function(a){return a instanceof $;}
	$.isArray=function(a){return "[object Array]"===_tS(a);};
	$.isArrayLike=function(a){return $.isNumber(a.length);};
	$.isDefined=function(a){return !$.isUndefined(a);};
	$.isElement=function(a){return a&&1===a.nodeType;};
	$.isNaN=function(a){return a!==a;};
	$.isNumber=function(a){return !$.isNaN(a)&&"[object Number]"===_tS(a);};
	$.isObject=function(a){return O(a)===a;};
	$.isString=function(a){return "[object String]"===_tS(a);};
	$.isUndefined=function(a){return a===void 0;};
	$.keys=O.keys||function(o){var r=[];for(var k in o){if(o.hasOwnProperty(k)){r.push(k);}}return r;};
	$.make=function(a){return $.make[a]?$.make[a]():D.createElement(a);};
	$.maker=function(a,b){$.make[a]=$.isString(b)?new Function("return document.createElement(\""+b+"\");"):b;};
	$.map=function(a,f,c){c=c||this;var i=-1,l=a.length,r=[];while(++i<l){r.push(f.call(c,a[i],i,a));}return r;};
	
	$.extend($,$.document.classList?
	{
		addClass:function(e,c){$.isElement(e)&&e.classList.add(c);},
		hasClass:function(e,c){$.isElement(e)&&e.classList.contains(c);},
		removeClass:function(e,c){$.isElement(e)&&e.classList.remove(c);},
		toggleClass:function(e,c){$.isElement(e)&&e.classList.toggle(c);}
	}:
	{
		addClass:function(e,c){if($.isElement(e)){var d=e.className;$.each(c.split(" "),function(v){if(d.indexOf(v)<0){d+=" "+v;}});e.className=d;}},
		hasClass:function(e,c){if($.isElement(e)){var d=e.className;return $.all(c.split(" "),function(v){return -1<d.indexOf(v);});}return false;},
		removeClass:function(e,c){if($.isElement(e)){
			e.className=$.map(e.className.split(" "),function(v){return -1<c.indexOf(v)?"":v;}).join(" ");}},
		toggleClass:function(e,c){
			
		}
	});
	
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
		
		after:function(a){
			
		},
		
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
		
		appendTo:function(a){
			
		},
		
		before:function(a){},
		
		childNodes:function(){},
		
		children:function(){},
		
		click:function(h){},
		
		css:function(a,b){},
		
		// $.prototype.each ( Function iterator [ , Boolean wrapped = false ] )
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
		
		prepend:function(a){
			
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
		
		toggleClass:function(c){return this.each(function(){$.toggleClass(this,c);});}
	};
	
	W.$=$;
})(document,Object,window);
