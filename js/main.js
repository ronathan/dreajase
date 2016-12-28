(function() {

	// Element declaration
	var $navbar = $('#navbar');
	var $sectionCouple = $('section#couple');
	var $sectionRSVP = $('section#rsvp');

	// Creates sticky header
	$navbar.waypoint({
		handler: function(direction) {
			$navbar.addClass('navbar-fixed');
		}
	});

	$navbar.waypoint({
		handler: function(direction) {
			$navbar.removeClass('navbar-fixed');
		},
		offset: '1px'
	});


	// var landingPage = $('#home-profile').waypoint({
	// 	handler: function(direction) {
	// 		$('#home-profile-picture').addClass("animated zoomIn");
	// 		$('#home-profile-text').addClass("animated fadeInRight");
	// 	}
	// });
})();