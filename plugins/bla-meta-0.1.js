// [0.1] Object $.meta ( )
// Works with Bla 0.2+
// Requires: $.obj , $.toCamel
$.meta=(function(){
	var _rO=function(a){
			var i=-1,
				l=a.length,
				r=$.obj();
			while(++i<l){
				a[i]=a[i].trim();
				if("none"===a[i]){
					r.follow=false;
					r.index=false;
				}
				else{
					if(!a[i].indexOf("no")){
						r[a[i].substring(2)]=false;
					}
					else{
						r[a[i]]=true;
					}
				}
			}
			return r;
		},
		_vO=function(a){
			var i=-1,
				l=a.length,
				r=$.obj(),
				v;
			while(++i<l){
				v=a[i].split("=");
				r[$.toCamel(v[0])]=v[1];
			}
			return r;
		};
	return function(){
		var i=-1,
			M,
			m=document.getElementsByTagName("meta"),
			l=m.length,
			r=$.obj();
		r.httpEquiv=$.obj();
		while(++i<l){
			M=m[i];
			if(M.hasAttribute("charset")){
				r.charset=M.getAttribute("charset");
			}
			else if(M.name){
				switch(M.name){
					case"keywords":
						r.keywords=M.content.split(",");
						break;
					case"robots":
						r.robots=_rO(M.content.split(","));
						break;
					case"viewport":
						r.viewport=_vO(M.content.split(","));
						break;
					default:
						if(M.name.indexOf(":")<0){
							r[M.name]=M.content;
						}
						/*
						else{
							
						}
						*/
				}
			}
		}
		return r;
	};
})();
