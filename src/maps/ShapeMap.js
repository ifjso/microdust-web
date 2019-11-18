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

  map.data.setStyle(feature => {
    return {
      strokeColor: '#fff',
      strokeWeight: 1,
      cursor: 'url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur)'
    };
  });

  map.data.addListener('mouseover', e => {
    map.data.overrideStyle(e.feature, {
      fillColor: '#0077ff',
      fillOpacity: 0.2
    });
  });

  map.data.addListener('mouseout', e => {
    map.data.revertStyle();
  });
};

const loadMapShapes = map => {
  map.data.loadGeoJson(
    'http://localhost:3000/TL_SCCO_CTPRVN2.geojson',
    { idPropertyName: 'CTPRVN' },
    features => {
      features.forEach(feature =>
        feature.setProperty('weight', Math.random() * 100)
      );
    }
  );
};

export default ShapeMap;
