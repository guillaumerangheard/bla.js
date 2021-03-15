(function(root){
	var _e={},
		hOP=_e.hasOwnProperty;
	
	// [0.1.0] Void $.publish ( String event [ , Object data = {} ] )
	//// Requires: $.each , $.extend
	$.publish=function(e,d){
		if(hOP.call(_e,e)){
			d=d||{};
			$.each(_e[e],function(v){
				v.f.call(v.c,$.extend(v.d,d,true));
			});
		}
	};
	
	// [0.1.0] Number $.subscribe ( String event , Function handler [ , Object data = {} [ , Any context = root ] ] )
	$.subscribe=function(e,h,d,c){
		if(!hOP.call(_e,e)){_e[e]=[];}
		var r=_e[e].push({f=h,d=d||{},c=c||root})-1;
		return r;
	};
	
	// [0.1.0] Void $.unsubscribe ( String event [ , Number index ] )
	//// Requires: $.isNumber
	$.unsubscribe=function(e,i){
		if(hOP.call(_e,e)){
			if($.isNumber(i)){
				delete _e[e][i];
			}
			else{
				delete _e[e];
			}
		}
	};
	
})(this);
