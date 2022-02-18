(function(){
	
	var _T={};
	
	// [0.1] $ $.publish ( String topic [ , Object data = {} ] )
	$.publish=function(t,d){
		if(_T[t]){
			if(_T[t].length){
				d=d||{};
				var i=-1,
					l=_T[t].length,
					u;
				while(++i<l){
					u=_T[t];
					u.f.call(u.c,d);
				}
			}
		}
		return $;
	}
	
	// [0.1] Object $.subscribe ( String topic , Function callback [ , Any context = window ] )
	$.subscribe=function(t,f,c){
		if(!_T[t]){
			_T[t]=[];
		}
		var index=_T[t].push({
				f:f,
				c:c||W
			})-1;
		return {
			unsubscribe:function(){
				delete _T[t][index];
			}
		};
	};
	
})();
