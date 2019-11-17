import React from 'react';
import SimpleMap from './SimpleMap';

const ShapeMap = ({
  center = { lat: 35.993201, lng: 127.759226 },
  zoom = 7,
  options,
  children
}) => (
  <SimpleMap
    center={center}
    zoom={zoom}
    options={options}
    handleApiLoaded={handleApiLoaded}
  >
    {children}
  </SimpleMap>
);

const handleApiLoaded = (map, maps) => {
  loadMapShapes(map);
};

const loadMapShapes = map =>
  map.data.loadGeoJson('http://localhost:3000/TL_SCCO_CTPRVN2.geojson');

export default ShapeMap;
