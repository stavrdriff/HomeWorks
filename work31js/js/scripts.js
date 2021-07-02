"use strict";

const map = L.map('map', {
   center: [47.1, 37.59],
   zoom: 12
});


// let popup = L.popup()
//    .setLatLng(latlng)
//    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//    .openOn(map);
// marker.bindPopup(popupContent).openPopup();


let customIcon = L.icon({
   iconUrl: 'img/marker.png',
   // shadowUrl: 'leaf-shadow.png',
   iconSize: [38, 40], // size of the icon
   // shadowSize:   [50, 64], // size of the shadow
   iconAnchor: [19, 40], // point of the icon which will correspond to marker's location
   // shadowAnchor: [4, 62],  // the same for the shadow
   // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([47.06731466591667, 37.47845833491723], { icon: customIcon }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
L.marker([47.06506193326218, 37.47973052394806], { icon: customIcon }).addTo(map);

