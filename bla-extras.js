/// Note to self : do scavenge all those snippets of yours.

/// Viewport and aspect related stuff.
$.aspectRatio=function(e){};
$.bRect=function(e){};
$.isInViewport=function(e){};

// $.viewport ( )
// $.viewport.height ( )
// $.viewport.width ( )
$.viewport=(function(){
	var _w=function(){
			var a=$.document.clientWidth,
				b=window.innerWidth;
			return a<b?b:a;
		},
		_h=function(){
			var a=$.document.clientHeight,
				b=window.innerHeight;
			return a<b?b:a;
		},
		V=function(){
			return {width:_w(),height:_h()};
		};
	V.width=_w;
	V.height=_h;
	return V;
})();

/// AJAX and URL related stuff

// $.fromQuery ( [ String query = $.getQuery() ] )
/// Still crude. Needs checking.
$.fromQuery=function(q){
	var r={};
	if($.isString(q)){
		q="?"===q.charAt(0)?q.substr(1):q;
		if(q.length){
			var d=$.decode.uri||decodeURIComponent;
			$.each(q.split("&"),function(v){
				var i=v.indexOf("=");
				switch(i){
					case -1:r[d(v)]=true;break;
					case 0:break;
					case v.length-1:r[d(v.substring(0,v.length-1))]=null;break;
					default:
						v=v.split("=");
						r[d(v[0])]=d(v[1]);
				}
			});
		}
	}
	return r;
};

// $.getQuery ( )
$.getQuery=function(){
	var q=window.location.search,r={};
	if(1<q.length){
		q=q.substr(1);
	}
	return r;
};

// $.toQuery ( Object object )
/// Crude. Needs checking / testing / better exception handling.
$.toQuery=function(o){
	var e=$.encode.uri||encodeURIComponent,r=[];
	$.eachKey(o,function(k,v){
		r.push(e(k)+"="+e(v));
	});
	return r.join("&");
};

// $.getMeta ( )
/// This function parses all "normal" <meta> tags in the page.
/// The implementation is still a bit crude. One should for instance be able to pass a namespace or prefix, in order to
/// gather only a subset of the data, i.e. Open Graph and/or Schema.org and/or Twitter Card.
/// -> $.getMeta ( [ String prefix = "" ] )
/// What about the API ? Shouldn't the function be called something like $.getMetadata ?
$.getMeta=function(){
	var m=document.getElementsByTagName("meta"),r={};
	$.each(m,function(e){
		if(e.hasAttribute("charset")){
			r.charset=e.getAttribute("charset");
		}
		else if(e.hasAttribute("http-equiv")){
			r.httpEquiv=e.getAttribute("http-equiv");
		}
		else{
			var n=e.getAttribute("name"),
				c=e.getAttribute("content");
			switch(n){
				case"keywords":case"robots":
					r[n]=$.map(c.split(","),function(v){
						return v.trim();
					});
					break;
				/// This one needs some cleaning-up, for cases of corrupted data.
				case"viewport":
					r.viewport={};
					$.each(c.split(","),function(v){
						v=v.trim();
						v=v.split("=");
						r.viewport[v[0].trim()]=v[1].trim();
					});
				/// In the next version, the function needs to be able to parse Open Graph, Schema.org and Twitter Card data.
				default:
					r[n]=c;
			}
		}
	});
	return r;
};
$.require=function(){};
$.template=function(s){};





$.extend($.api,{
	isInViewport:function(){}
});
