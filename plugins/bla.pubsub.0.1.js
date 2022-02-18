(function(){
	
	var _E={};
	
	// [0.1] Void $.publish ( String topic [ , Object data = {} ] )
	$.publish=function(e,d){
		if(_E[e]){
			if(_E[e].length){
				d=d||{};
				var E=_e[e],
					i=-1,
					l=E.length;
				while(++i<l){
					E[i].f.call(E[i].c,d);
				}
			}
		}
	};
	
})();
