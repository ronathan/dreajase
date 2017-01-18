$(function() {

  var map;
  var _currentMarkers = [];

  var seligman = [{marker: new google.maps.LatLng (44.5224942, -80.3316061), info: "Seligman Cabin", address: "130 Sleepy Hollow Rd, Blue Mountain, ON L9Y 0S2"}];
  
  var reception = [{marker: new google.maps.LatLng (44.515848, -80.332482), info: "Craigleith Ski Club", address: "164 Craigleith Rd, Blue Moutain, ON L9Y 0S4"}];

  var mainWedding = seligman.concat(reception);

  var hotels =  [{marker: new google.maps.LatLng (44.5071523,-80.3158437), info: "Blue Mountain Resort", address: "108 Jozo Weider Blvd, Blue Mountains, ON L9Y 3Z2"},
                {marker: new google.maps.LatLng (44.5124224,-80.2573995), info: "Cranberry Resort", address: "19 Keith Ave, Collingwood, ON L9Y 4T9"},
                {marker: new google.maps.LatLng (44.5015713,-80.3105736), info: "Westin Trillium House - Blue Mountain", address: "220 Gord Canning Dr, Blue Mountains, ON L9Y 0V9"},
                {marker: new google.maps.LatLng (44.4587005,-80.3103755), info: "Days Inn", address: "15 Cambridge St, Collingwood, ON L9Y 0A2"}];

  var restaurants = [{marker: new google.maps.LatLng (44.502167,-80.223433), info: "<a href='http://www.thehungrysumo.com' target='_blank'>Hungry Sumo (Japanese)</a>"},
                    {marker: new google.maps.LatLng (44.500328,-80.21862), info: "<a href='http://www.azzurra.ca' target='_blank'>Azzura Trattoria (Italian)</a>"},
                    {marker: new google.maps.LatLng (44.50047,-80.217622), info: "<a href='http://www.tesororestaurant.ca' target='_blank'>Tesoro (Italian)</a>"},
                    {marker: new google.maps.LatLng (44.503262,-80.234278), info: "<a href='http://www.thaifoodcollingwood.com/' target='_blank'>The Siamese Gecko (Thai)</a>"},
                    {marker: new google.maps.LatLng (44.501548,-80.310488), info: "<a href='http://oliverbonacini.com/blue-mountain.aspx' target='_blank'>Oliver & Bonacini Cafe Grill</a>"},
                    {marker: new google.maps.LatLng (44.504196,-80.312584), info: "<a href='http://www.tholos.ca' target='_blank'>Tholos (Greek)</a>"},
                    {marker: new google.maps.LatLng (44.503339,-80.310123), info: "<a href='http://www.firehallpizza.com/' target='_blank'>Firehall Pizza</a>"},
                    {marker: new google.maps.LatLng (44.561773,-80.452013), info: "<a href='http://www.themillcafe.com' target='_blank'>The Mill Cafe</a>"},
                    {marker: new google.maps.LatLng (44.56017,-80.447557), info: "<a href='http://www.simplicitybistro.com'www.>Simplicity Bistro</a>"},
                    {marker: new google.maps.LatLng (44.56172,-80.453235), info: "<a href='http://www.brucewinebar.ca' target='_blank'>Bruce Wine Bar Kitchen</a>"},
                    {marker: new google.maps.LatLng (44.5562539,-80.4404117), info: "<a href='http://www.stevesthornbury.ca' target='_blank'>Steve\'s</a>"}];

  var activities = [{marker: new google.maps.LatLng (44.497966,-80.224311), info: "<a href='http://www.sceniccaves.com' target='_blank'>Scenic Caves</a>"},
                    {marker: new google.maps.LatLng (44.5468715,-80.4244731), info: "Georgian Trail"},
                    {marker: new google.maps.LatLng (44.52223,-80.293271), info: "<a href='http://www,squirejohns.com' target='_blank'>Bike Rentals from Squire John\'s</a>"},
                    {marker: new google.maps.LatLng (44.500987,-80.213719), info: "<a href='http://www.buddharider.com/' target='_blank'>Buddha Rider</a>"},
                    {marker: new google.maps.LatLng (44.545936,-79.673338), info: "<a href='https://www.facebook.com/ComebackRanch' target='_blank'>Comeback Ranch (Horseback Riding)</a>"},
                    {marker: new google.maps.LatLng (44.499617,-80.216656), info: "<a href='http://thenorthwoodfitnessclub.com/' target='_blank'>The Northwood Club (Gym)</a>"},
                    {marker: new google.maps.LatLng (44.496071,-80.210568), info: "<a href='http://ymcaofsimcoemuskoka.ca/' target='_blank'>YMCA</a>"},
                    {marker: new google.maps.LatLng (44.496071,-80.210568), info: "<a href='http://www.collingwoodnow.com/teesplease/' target='_blank'>Tees Please (Driving Range)</a>"},
                    {marker: new google.maps.LatLng (44.507066,-80.31587), info: "<a href='http://www.bluemountain.ca/golf.htm' target='_blank'>Monterra Golf</a>"},
                    {marker: new google.maps.LatLng (44.4943824,-80.258067), info: "<a href='http://www.bmgcc.net/' target='_blank'>Blue Mountain Golf & Country Club</a>"},
                    {marker: new google.maps.LatLng (44.437422,-80.19727), info: "<a href='http://www.batteauxcreek.com/' target='_blank'>Batteaux Creek Golf Club</a>"},
                    {marker: new google.maps.LatLng (44.579288,-80.492437), info: "<a href='http://www.lorabaygolf.com/' target='_blank'>Lora Bay Golf Club</a>"},
                    {marker: new google.maps.LatLng (44.463785,-80.242739), info: "<a href='http://www.oslerbrook.com/' target='_blank'>OslerBrook Golft & Country Club</a>"},
                    {marker: new google.maps.LatLng (44.501555,-80.289824), info: "<a href='http://www.scandinave.com/en/bluemountain/' target='_blank'>Le Scandinave Spa</a>"},
                    {marker: new google.maps.LatLng (44.5124224,-80.2573995), info: "<a href='http://www.thecranberryresort.com/' target='_blank'>Cranberry Golf Resort</a>"}];

  // Initialize the map and set the center point to Collingwood, ON
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(44.515848, -80.332482),
      zoom: 10
    };
    map = new google.maps.Map(document.getElementById("accommodations-map-canvas"),
        mapOptions);

    addMarkersToMap(mainWedding);
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers(markers) {
      $.each(_currentMarkers, function(index, marker) {
          marker.setMap(null);
      });
  }

  function addMarkersToMap(markers) {
      // Clear all markers currently on the map
      if (_currentMarkers != null && _currentMarkers.length > 0) { 
          clearMarkers(_currentMarkers);
      }

      // Add new markers to the map and calculate new bounds
      var bounds = new google.maps.LatLngBounds();
      var infoWindow = null;

      $.each(markers, function(index, value) {
          var marker = new google.maps.Marker({position: value.marker, map: map, animation: google.maps.Animation.DROP });
          _currentMarkers.push(marker);
          bounds.extend(value.marker);
          google.maps.event.addListener(marker, 'click', function() {
              if (infoWindow) {
                infoWindow.close();
              }
              infoWindow = new google.maps.InfoWindow();
              if(value.address) {
                var mapsLink = "http://maps.google.com/?q=" + value.address;
                infoWindow.setContent('<a href=' + '"' + mapsLink + '"' + 'style="font-weight: bold; color: #ED943D;" target="_blank;">' + value.info + '</a><div style="font-size: 12px; color: #999;">' + value.address + '</div>');
              } else {
                infoWindow.setContent(value.info);
              }
              infoWindow.open(map, marker);
          });
      });
      map.fitBounds(bounds);

      var listener = google.maps.event.addListener(map, "idle", function() { 
        if (map.getZoom() > 16) map.setZoom(16); 
        google.maps.event.removeListener(listener); 
      });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  // Filter locations on map 
  var $mapFilter = $(".map-filter");
  $mapFilter.click(function() { 
      var $this = $(this);
      $('.map-filter').removeClass('focus');
      $this.addClass('focus');
      switch($this.attr('data-filter')) {
          case "seligman":
            addMarkersToMap(seligman);
            break;
          case "reception":
            addMarkersToMap(reception);
            break;
          case "hotels":
            addMarkersToMap(hotels);
            break;
          case "restaurants":
            addMarkersToMap(restaurants);
            break;
          case "activities":
            addMarkersToMap(activities);
            break;
          default:
            addMarkersToMap(mainWedding);
            break;
      }
  });
});