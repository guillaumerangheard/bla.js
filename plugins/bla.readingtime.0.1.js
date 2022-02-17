// [0.1] Object $.api.readingTime ( [ Number wpm = 238 ] )
// Works with: Bla 0.1+
// Requires: $.wordCount 0.1+
$.api.readingTime=(function(F){
	return function(wpm){
		var r={
				h:0,
				m:0,
				s:0
			},
			w=this.wordCount();
		if(w){
			r.s=F(w/((wpm||238)/60));
			if(3600<=r.s){
				r.h=F(r.s/3600);
				r.s-=r.h*3600;
			}
			if(60<=r.s){
				r.m=F(r.s/60);
				r.s-=r.m*60;
			}
		}
		return r;
	};
})(Math.floor);
