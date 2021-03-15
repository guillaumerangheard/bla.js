// [0.1.0] Number $.aspectRatio ( )
//// Requires: $.viewport
$.aspectRatio=function(){
	var a=$.viewport();
	return a.width/a.right;
};

// Number $.prototype.aspectRatio ( )
//// Requires: $.prototype.bRect
$.api.aspectRatio=function(){
	var a=this.bRect();
	return a.width?a.width/a.height:0;
};
