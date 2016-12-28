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

			if(data.curTop >= sectionCoupleOffset) {
				$navbar.addClass('navbar-fixed');
			} else {
				$navbar.removeClass('navbar-fixed');
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
});