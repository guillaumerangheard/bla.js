// This plugin requires bla-viewport.

// Number $.aspectRatio ( )
// This function returns the aspect ratio of the viewport.
$.aspectRatio=function(){
	var a=$.viewport();
	return a.width/a.right;
};

// Number $.prototype.aspectRatio ( )
// This function returns the aspect ratio of the first element in the list.
$.api.aspectRatio=function(){
	var a=this.bRect();
	return a.width?a.width/a.height:0;
};
