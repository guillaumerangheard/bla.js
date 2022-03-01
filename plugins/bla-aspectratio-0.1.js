// [0.1] Number $.aspectRatio ( )
// Works with Bla 0.1+
// Requires: $.viewport
$.aspectRatio=function(){
	var a=$.viewport();
	return a.width/a.right;
};

// Number $.prototype.aspectRatio ( )
// Works with Bla 0.1+
// Requires: $.prototype.bRect
$.api.aspectRatio=function(){
	var a=this.bRect();
	return a.width?a.width/a.height:0;
};
