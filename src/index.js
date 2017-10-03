console.log('Hello from JavaScript');

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiZXJlbmVyZG8iLCJhIjoiY2o4YnNkMnFjMDFhaTJ3cDd5ajQ5N3NxcCJ9.p9jdk_dS0rFrtHWpF4ZeBA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoiZXJlbmVyZG8iLCJhIjoiY2o4YnNkMnFjMDFhaTJ3cDd5ajQ5N3NxcCJ9.p9jdk_dS0rFrtHWpF4ZeBA';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v10'
// });
