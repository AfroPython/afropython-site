$(function(){
	$("#demo01").animatedModal({
        animatedIn:'zoomIn',
        animatedOut:'bounceOut',
        color:'#da691a',
	});

	$(window).scroll(function () { 
		if ($(this).scrollTop() > 430) { 
			$("header").addClass("min"); 
		} else { 
			$("header").removeClass("min"); 
		} 
	});  
});