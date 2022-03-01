// Works with Bla 0.2+
// Requires: $.obj
(function(W){
	
	var _E=$.obj();
	
	// [0.2] $ $.publish ( String topic [ , Any data ] )
	$.publish=function(a,b){
		if(_E[a]){
			if(_E[a].length){
				var i=-1,
					l=_E[a].length;
				while(++i<l){
					_E[a][i].f.call(_E[a][i].c,b);
				}
			}
		}
		return $;
	};
	
	// [0.1] Object $.subscribe ( String topic , Function callback [ , Any context = window ] )
	$.subscribe=function(a,b,c){
		if(!_E[a]){
			_E[a]=[];
		}
		var S=$.obj();
		S.f=b;
		S.c=c||W;
		var I=_E[a].push(S)-1,
			R=$.obj();
		R.unsubscribe=function(){
			delete _E[a][I];
		};
		return R;
	};
	
})(this);
