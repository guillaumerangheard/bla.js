// [0.1] Number $.api.wordCount ( )
// Works with: Bla 0.1+
$.api.wordCount=(function(){
	var _s=/\s+/,
		_w=function(e){
			switch(e.nodeType){
				case 1:
					var i=-1,
						l=e.childNodes.length,
						r=0;
					while(++i<l){
						r+=_w(e.childNodes[i]);
					}
					return r;
				case 3:
					return e.nodeValue.split(_s).length;
			}
			return 0;
		};
	return function(){
		var r=0;
		if(this.length){
			var i=-1,
				l=this.length;
			while(++i<l){
				r+=_w(this[i]);
			}
		}
		return r;
	};
})();
