(function() {

	// Element declaration
	var $navbar = $('#navbar');

	// Creates sticky header
	$navbar.waypoint({
		handler: function(direction) {
			$navbar.addClass('navbar-fixed');
			console.log("SOMETHING HAPPENED");
		}
	});

	$navbar.waypoint({
		handler: function(direction) {
			$navbar.removeClass('navbar-fixed');
			console.log("SOMETHING ELSE HAPPENED");
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