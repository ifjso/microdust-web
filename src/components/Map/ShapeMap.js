import React from 'react';
import SimpleMap from './SimpleMap';
import CTPRVN from '../../data/CTPRVN';
import SIG from '../../data/SIG';

const ShapeMap = ({
  center = { lat: 35.993201, lng: 127.759226 },
  zoom = 7,
  options,
  children
}) => {
  const onLoad = (map, maps) => {
    const data1 = loadMapShapes(map, maps, CTPRVN);
    const data2 = loadMapShapes(map, maps, SIG);

    data1.setMap(map);
    data2.setMap(null);

    map.addListener('zoom_changed', () => {
      const zoom = map.getZoom();
      if (zoom > 8) {
        data1.setMap(null);
        data2.setMap(map);
      } else {
        data1.setMap(map);
        data2.setMap(null);
      }
    });
  };

  return (
    <SimpleMap center={center} zoom={zoom} options={options} onLoad={onLoad}>
      {children}
    </SimpleMap>
  );
};

const loadMapShapes = (map, maps, geoData) => {
  const data = new maps.Data({ map });

  data.addGeoJson(geoData);
  // data.loadGeoJson(
  //   `http://localhost:3000/${url}`,
  //   { idPropertyName: url },
  //   features =>
  //     features.forEach(feature =>
  //       feature.setProperty('weight', Math.random() * 100)
  //     )
  // );

  data.setStyle(feature => {
    return {
      strokeColor: '#fff',
      strokeWeight: 1,
      cursor: 'url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur)'
    };
  });

  data.addListener('mouseover', e => {
    data.overrideStyle(e.feature, {
      fillColor: '#0077ff',
      fillOpacity: 0.2
    });
  });

  data.addListener('mouseout', e => {
    data.revertStyle();
  });

  return data;
};

export default ShapeMap;
