import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(function(){
	$(".open-modal").click(function(){
		$("#animatedModal").addClass('active');
	});

	$(".close-animatedModal").click(function(){
		$("#animatedModal").removeClass('active');
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 430) {
			$("header").addClass("min");
		} else {
			$("header").removeClass("min");
		}
	});
});
