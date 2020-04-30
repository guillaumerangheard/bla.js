(function(D,O,W){
	var _api=true,
		_ctx=function(a){
			a=$.isString(a)?D.querySelector(a):a;
			a=$.isArrayLike(a)?a[0]:a;
			return $.isElement(a)?a:D;
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
					  $.isArray(a)?
					  $.build.apply(W,a):
					  a
			);
		};
	
	$.all=function(a,f,c){};
	$.build(a,b,c){};
	$.each=function(a,f,c){};
	$.eachKey=function(o,f,c){};
	$.extend=function(a,b,p){};
	
	W.$=$;
})(document,Object,window);
