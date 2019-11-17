import React from 'react';
import GoogleMap from './GoogleMap';

const SouthOfKoreaMap = () => (
  <GoogleMap
    center={{ lat: 35.993201, lng: 127.759226 }}
    zoom={7}
    options={{
      restriction: {
        latLngBounds: {
          north: 43.522419,
          south: 28.291993,
          west: 116.637253,
          east: 138.346238
        },
        strictBounds: true
      }
    }}
    handleApiLoaded={handleApiLoaded}
  />
);

const handleApiLoaded = (map, maps) => {
  loadMapShapes(map);
};

const loadMapShapes = map =>
  map.data.loadGeoJson('http://localhost:3000/TL_SCCO_CTPRVN.geojson');

export default SouthOfKoreaMap;
