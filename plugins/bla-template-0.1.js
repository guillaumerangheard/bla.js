$.Template=(function(){
	
	var _a=/<\?([^\?>]+)\?>/g,
		
		_b=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
		
		_c=/[\n\r\t]/g,
		
		_d=/"/g,
		
		// [0.1] $.Template ( String src )
		// Requires: $.isString , $.Template.compile
		T=function(a){
			if(!(this instanceof T)){
				return new T(a);
			}
			this.src=$.isString(a)?a:"";
			this.renderer=T.compile(this.src);
		};
	
	// [0.1] Function $.Template.compile ( String src )
	// Requires: $.isString
	T.compile=function(s){
		if($.isString(s)){
			if(s.length){
				s=s.replace(_c,"");
				var r="var r=\"\";",
					c=0,
					m,
					a=function(l,j){
						j?(r+=l.match(_b)?l:"r+="+l+";"):
						  (r+=l!=""?"r+=\""+l.replace(_d,"\\\"")+"\";":"");
						return a;
					};
				while(m=_a.exec(s)){
					a(s.slice(c,m.index))(m[1],true);
					c=m.index+m[0].length;
				}
				a(s.substr(c,s.length-c));
				r+="return r;";
				return new Function(r);
			}
		}
		return new Function("return \"\";");
	};
	
	T.prototype={
		
		// [0.1] String $.Template.prototype.render ( Object data )
		render:function(a){
			return this.renderer.call(a);
		}
		
	};
	
	return T;
})();
