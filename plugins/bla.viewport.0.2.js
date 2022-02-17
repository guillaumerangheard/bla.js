// [0.2] Object $.viewport ( )
// [0.2] Number $.viewport.height ( )
// [0.2] Number $.viewport.width ( )
// Works with Bla 0.1+
$.viewport=(function(D,M,W){
	var _h=function(){
			return M(D.clientHeight,W.innerHeight);	
		},
		_w=function(){
			return M(D.clientWidth,W.innerWidth);
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
})(document.documentElement,Math.max,window);
