$.aspectRatio=function(){
	var a=$.viewport();
	return a.width/a.right;
};

$.api.aspectRatio=function(){
	var a=this.bRect();
	return a.width?a.width/a.height:0;
};
