// [alpha] $.Template ( [ String source = "" ] )
$.Template=(function(){
	var T=function(s){
			if(!(this instanceof T)){
				return new T(s);
			}
			this.source=""+(s||"");
			this.render=T.compile(this.source);
			this.compile();
		},
		Tp=T.prototype;
	
	// [alpha] Function $.Template.compile ( String source )
	T.compile=function(s){
		return new Function("data",s.length?"return (function(){}).call(data);":"return \"\";");
	};
	
	// [alpha] Function $.Template.prototype.compile ( )
	Tp.compile=function(){
		this.render=T.compile(this.source);
	};
	
	// [alpha] Boolean $.Template.prototype.render ( [ Object data = {} ] )
})();
