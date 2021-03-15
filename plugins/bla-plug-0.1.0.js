// [alpha] Boolean $.plug ( String name , Function code )
//// Requires: $.isFunction , $.isString
$.api.plug=function(a,b){
	if($.isString(a)&&$.isFunction(b)){
		$.prototype[a]=b;
		return true;
	}
	return false;
};
