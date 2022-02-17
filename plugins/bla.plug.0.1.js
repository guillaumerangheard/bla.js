// [0.1] $ $.plug ( String name , Function code [ , Boolean overwrite = false ] )
// Requires: $.isFunction , $.isString
$.plug=function(n,f,o){
	if($.isString(n)&&$.isFunction(f)){
		if(o||!(n in $.prototype)){
			$.prototype[n]=f;
		}
	}
	return $;
};
