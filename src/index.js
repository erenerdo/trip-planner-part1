//console.log('Hello from JavaScript');
const buildMarker = require('./marker');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJlbmVyZG8iLCJhIjoiY2o4YnNkMnFjMDFhaTJ3cDd5ajQ5N3NxcCJ9.p9jdk_dS0rFrtHWpF4ZeBA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker("activities", [-74.009151, 40.705086]);
marker.addTo(map);
