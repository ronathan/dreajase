$(function() {

	// Element declaration
	var $navbar = $('#navbar');
	var $sectionCouple = $('section#couple');
	var $sectionEventDetails = $('section#event-details');
	var $sectionRSVP = $('section#rsvp');

	var sectionCoupleOffset = $sectionCouple.offset().top;
	var sectionEventDetailsOffset = $sectionEventDetails.offset().top;
	var sectionRSVPOffset = $sectionRSVP.offset().top;

	// Tracking for SVG animations
	var hasDrawnAnimationsForEventDetails = false;

	// Scroll Tracking
	var s = skrollr.init({ 
		forceHeight: false,
		easing: {
			sin: function(p) {
				return (Math.sin(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
			},
			cos: function(p) {
				return (Math.cos(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
			},
			outQuartic: function(p) {
				return 0*(p*p*p*p*p) + (-1)*(p*p*p*p) + 4*(p*p*p) + (-6)*(p*p) + 4*p
			}
		},
		render: function(data) {	

			if(data.curTop >= (sectionCoupleOffset - 60)) {
				$navbar.addClass('navbar-fixed');
				$sectionCouple.addClass('extra-margin');
			} else {
				$navbar.removeClass('navbar-fixed');
				$sectionCouple.removeClass('extra-margin');
			}

			if(data.curTop >= (sectionCoupleOffset - 400)) {
				$('.couple-image-container').addClass('animated fadeIn');
				$('.couple-address').addClass('animated fadeInRight');
				$('.couple-desc-writeup').addClass('animated fadeInRight');
				$('.couple-header').addClass('animated fadeInRight');
			}

			// if(!hasDrawnAnimationsForEventDetails && data.curTop >= sectionEventDetailsOffset) {
				
			// 	var $path = $sectionEventDetails.find('path#wtf');
			// 	$path.attr("class", "path-animate");

			// 	hasDrawnAnimationsForEventDetails = true;
			// 	console.log("what");
			// } else if(hasDrawnAnimationsForEventDetails && data.curTop < sectionEventDetailsOffset) {
				
			// 	var $path = $sectionEventDetails.find('path#wtf');
			// 	$path.attr("class", "path-hide");

			// 	hasDrawnAnimationsForEventDetails = false;
			// 	console.log("what2");
			// }
		}
	});

	// Click Handlers
	$('.event-details-menu-item').click(function(e) {
		
		// Navbar Selection
		$('.event-details-menu-item').removeClass('selected');
		$(this).addClass('selected');

		// Data Attribute on Menu Item
		var eventDetails = $(this).attr("data-eventdetails");

		// Hide / show event details
		$('.event-details-item').hide();
		$('#event-details-item-' + eventDetails).addClass('animated fadeIn');
		$('#event-details-item-' + eventDetails).show();

		// Change background color
		$('section#event-details').removeClass();
		$('section#event-details').addClass(eventDetails);
	});
});