$.Template=(function(){
	var T=function(s){
			if(!(this instanceof T)){
				return new T(s);
			}
			this.source=""+(s||"");
			this.compile();
		},
		Tp=T.prototype;
	
	Tp.compile=function(){
		this.render=new Function("data","return (function(){}).call(data);");
	};
})();
