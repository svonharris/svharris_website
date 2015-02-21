$('').on('hover', function() {
	$('.project-title').addClass('.project-row h3:hover');
})


$('.js-btn-nav').on('click touchstart', function() {
	var clicks = $(this).data("clicks");
	if (!clicks) {
	    $('.js-move').animate({marginRight: "237px"}, 150);
	    $('.js-main-contact').animate({
		    right: 237
		}, 150, function() {
		    $('.js-main-contact').addClass('main-move');
		});
	    // {marginRight: "237px"}
	      //second user click
	} else {
		$('.js-move').animate({marginRight: "0px"}, 150);
		// $('.main-contact').animate({marginRight: "0"});
	    $('.js-main-contact').animate({
		    right: 0
		}, 150, function() {
		    $('.js-main-contact').removeClass('main-move');
		});
	}
	    $(this).data("clicks", !clicks);
});

