function initialize() {
    var mapOptions = {
      zoom: 18,
      center: new google.maps.LatLng(-33.890542, 151.274856)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);

    var image = 'images/maps/pin-maps.png';
    var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);