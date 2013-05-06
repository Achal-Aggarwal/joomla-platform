$(document).ready(function() {
    	if (!Modernizr.inputtypes.email){
	  	$('input[type=email]').each(function(){
	  		$(this).addClass('validate-email');
	  	});
	}
});
