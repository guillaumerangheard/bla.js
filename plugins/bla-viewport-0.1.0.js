// This little plugin was inspired by verge.js.
// It has three core, self-explanatory functions.
if($){
	$.viewport=(function(D,M,W){
			// [0.1.0] Number $.viewport.width ( )
		var W=function(){
				return M.max(D.clientWidth,W.innerWidth);
			},

			// [0.1.0] Number $.viewport.height ( )
			H=function(){
				return M.max(D.clientHeight,W.innerHeight);
			},

			// [0.1.0] Rectangle $.viewport ( )
			V=function(){
				return {
					width:W(),
					height:H()
				};
			};

		V.width=W;
		V.height=H;
		return V;
	})($.document,Math,window);
}
