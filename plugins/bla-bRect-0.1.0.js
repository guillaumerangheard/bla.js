// [0.1.0] Rectangle $.prototype.bRect ( )
$.api.bRect=function(){
	var r={x:0,y:0,width:0,height:0};
	if(this.length){
		var s=this[0].getBoundingClientRect();
		r.x=s.left||0;
		r.y=s.top||0;
		r.width=s.width||0;
		r.height=s.height||0;
	}
	return r;
};
