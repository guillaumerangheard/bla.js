$.api.plug=function(a,b){
	if($.isString(a)&&$.isFunction(b)){
		$.prototype[a]=b;
		return true;
	}
	return false;
};
