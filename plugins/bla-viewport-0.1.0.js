// This little plugin was inspired by verge.js.
// It has three core, self-explanatory functions:
// $.viewport ( )
// $.viewport.width ( )
// $.viewport.height ( )
$.viewport=(function(D,M,W){
	var W=function(){return M.max(D.clientWidth,W.innerWidth);},
		H=function(){return M.max(D.clientHeight,W.innerHeight);},
		V=function(){return {width:W(),height:H()};};
	V.width=W;
	V.height=H;
	return V;
})($.document,Math,window);
