// [0.1] Object $.scroll ( )
// [0.1] $      $.scroll ( [ Number x , ] Number y )
// [0.1] Number $.scroll.x ( )
// [0.1] $      $.scroll.x ( Number x )
// [0.1] Number $.scroll.y ( )
// [0.1] $      $.scroll.y ( Number y )
// Works with Bla 0.1+
// Requires: $.obj
$.scroll=(function(D,W){
	var _x=function(a){
			if(arguments.length){
				W.scrollTo(a,_y());
				return $;
			}
			return W.pageXOffset||D.scrollLeft;
		},
		_y=function(a){
			if(arguments.length){
				W.scrollTo(_x(),a);
				return $;
			}
			return W.pageYOffset||D.scrollTop;
		},
		S=function(a,b){
			switch(arguments.length){
				case 1:
					return _y(a);
				case 2:
					W.scrollTo(a,b);
					return $;
				default:
					var r=$.obj();
					r.x=_x();
					r.y=_y();
					return r;
			}
		};
	S.x=_x;
	S.y=_y;
	return S;
})(document.documentElement,this);
