$.fromQuery=function(q){};

$.getMeta=function(){};

$.getQuery=function(){};

$.isInViewport=function(e){};

$.require=function(){};

$.template=function(s){};

$.toQuery=function(o){};

$.viewport=(function(){
	var _w=function(){},
		_h=function(){},
		V=function(){return {width:_w(),height:_h()};};
	V.width=_w;
	V.height=_h;
	return V;
})();

$.extend($.api,{
	isInViewport:function(){}
});
