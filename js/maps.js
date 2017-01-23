$(function() {

  var $map;
  var _currentMarkers = [];
  var _currentItems = [];

  var hotel = {
    name: "hotel",
    position: new google.maps.LatLng (43.681697, -79.7158211), 
    info: "The Courtyard Marriot", 
    address: "90 Biscayne Crescent, Brampton, ON L6W 4S1"
  };
  
  var hinduWedding = {
    name: "hinduWedding",
    position: new google.maps.LatLng (43.6425551, -79.7636427), 
    info: "Millenium Gardens Banquet Centre", 
    address: "20 Polonia Ave #100, Brampton, ON L6Y 0K7"
  };

  var christianWedding = {
    name: "christianWedding",
    position: new google.maps.LatLng (43.8669374,-79.8431236), 
    info: "The Greenhouse at the Royal Ambassador", 
    address: "15430 Innis Lake Road, Calendon East, ON L7C 2Z1"
  };



  // Initialize the map and set the center point to hotel in Brampton, ON
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(43.681697, -79.7158211),
      zoom: 12
    };
    $map = new google.maps.Map(document.getElementById("accommodations-map-canvas"),
        mapOptions);

    addOrRemoveMarkerToMap(hotel);
  }

  // Adds or removes marker depending on whether or not they were already added
  // Never allows hotel to be removed
  function addOrRemoveMarkerToMap(item) {

      var index = null;

      for(var i = 0; i < _currentItems.length; i++) {
        if (_currentItems[i].name == item.name && item.name != "hotel") {
          index = i;
        }
      }

      // Remove item if found
      if(index != null) {

        _currentMarkers[index].setMap(null);
        _currentMarkers.splice(index, 1);
        _currentItems.splice(index, 1);
      } else {
       
        var marker = new google.maps.Marker({position: item.position, map: $map, animation: google.maps.Animation.DROP });
        _currentMarkers.push(marker);
        _currentItems.push(item);

        // Add click listener to PIN
        var infoWindow = new google.maps.InfoWindow();
        if(item.address) {

          var mapsLink = "http://maps.google.com/?q=" + item.address;
          infoWindow.setContent(
            '<a href=' + '"' + mapsLink + '"' + 
            'style="font-weight: normal; color: #F3C078;" target="_blank;">' + 
            item.info + '</a><div style="font-size: 12px; color: #030301;">' + 
            item.address + '</div>'
          );
        } else {
          infoWindow.setContent(item.info);
        }
        
        infoWindow.open($map, marker);
        google.maps.event.addListener(marker, 'click', function() {
            
            infoWindow.open($map, marker);
        });
      }

      var bounds = new google.maps.LatLngBounds();
      for(var i = 0; i < _currentMarkers.length; i++) {
        bounds.extend(_currentMarkers[i].position);
      }

      $map.fitBounds(bounds);
      
      if(_currentMarkers.length == 1) {
        $map.setZoom(12);
      }

      // var listener = google.maps.event.addListener(map, "idle", function() { 
      //   if (map.getZoom() > 16) map.setZoom(16); 
      //   google.maps.event.removeListener(listener); 
      // });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  var $mapLink = $(".accommodations-POIitem h3");

  // Add / Remove items by clicking them
  $mapLink.click(function() { 

      var $this = $(this);
      if($this.attr('data-marker') != 'hotel') {
        $this.toggleClass("selected");

        switch($this.attr('data-marker')) {
            case "hindu":
              addOrRemoveMarkerToMap(hinduWedding);
              break;
            case "christian":
              addOrRemoveMarkerToMap(christianWedding);
              break;
        }
      }
  });

});