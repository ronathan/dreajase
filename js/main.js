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
	var hasDrawnAnimationsForCouple = false;
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

			if(data.curTop >= (sectionCoupleOffset - $navbar.height())) {
				$navbar.addClass('navbar-fixed');
				$sectionCouple.addClass('extra-margin');
			} else {
				$navbar.removeClass('navbar-fixed');
				$sectionCouple.removeClass('extra-margin');
			}

			if(data.curTop >= (sectionCoupleOffset - 400) && !hasDrawnAnimationsForCouple) {
				
				hasDrawnAnimationsForCouple = true;
				$('div.couple-image-container').addClass('animated fadeIn');
				$('div.couple-header').addClass('animated fadeInRight');
				$('div.couple-address').addClass('animated fadeInRight');
				$('div.couple-desc-writeup').addClass('animated fadeInRight');
				$('div.couple-signature').addClass('animated fadeIn');
			}



			if(data.curTop >= (sectionEventDetailsOffset - 400) && !hasDrawnAnimationsForEventDetails) {

				hasDrawnAnimationsForEventDetails = true;
				$('div.event-details-header').addClass('animated fadeIn');
				$('div.event-details-menu').addClass('animated fadeIn');
				$('div.event-details-venue').addClass('animated fadeInUp');
				$('div.event-details-timeline-section').addClass('animated fadeInUp');
			}
		}
	});

	function showTimelineSection(i, $timelineSections) {

		setTimeout(function() {
			var $timelineSection = $($timelineSections[i]);	
			$timelineSection.addClass('animated fadeInUp');
			if(i++ < $timelineSections.length) showTimelineSection(i, $timelineSections);
		}, 400);
	}
	// Click Handlers

	$('.navbar-item').click(function(e) {

		var $this = $(this);
		var section = $this.attr('data-section');
		$('body').stop().animate(
		{ scrollTop : ( $('#' + section).offset().top + 'px' ) }, 
		650, 
		'easeInOutExpo');
	});

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