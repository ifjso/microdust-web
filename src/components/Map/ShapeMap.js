import React from 'react';
import SimpleMap from './SimpleMap';
import CTPRVN from '../../data/CTPRVN';
import SIG from '../../data/SIG';
import { getCity } from '../../utils/helper/cities-helper';
import { getColor, getOpacity } from '../../utils/helper/color-helper';
import { getMicrodustsByCity } from '../../modules/api/airkorea-api';

const ShapeMap = ({
  center = { lat: 35.993201, lng: 127.759226 },
  zoom = 7,
  options,
  children
}) => {
  const onLoad = (map, maps) => loadMapShapes(map, maps);

  return (
    <SimpleMap center={center} zoom={zoom} options={options} onLoad={onLoad}>
      {children}
    </SimpleMap>
  );
};

const loadMapShapes = async (map, maps) => {
  const data1 = new maps.Data({ map });
  const data2 = new maps.Data({ map });

  data1.addGeoJson(CTPRVN);
  data2.addGeoJson(SIG);

  const data = await getMicrodustsByCity();

  data1.forEach(feature => {
    const city = getCity(feature.getProperty('CTPRVN_CD'));
    feature.setProperty('value', data[0][city]);
  });

  data2.setMap(null);

  data1.setStyle(feature => {
    console.log(1);

    return {
      strokeColor: '#fff',
      strokeWeight: 1,
      cursor: 'url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur)',
      // fillColor: getColor(feature.getProperty('value')),
      fillColor: '#000',
      fillOpacity: getOpacity(feature.getProperty('value'))
    };
  });

  data2.setStyle(feature => {
    console.log(2);

    return {
      strokeColor: '#fff',
      strokeWeight: 1,
      cursor: 'url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur)',
      fillColor: '#000',
      fillOpacity: 0.5
    };
  });

  // data1.setMap(map);

  map.addListener('zoom_changed', () => {
    const zoom = map.getZoom();
    if (zoom > 7) {
      data1.setMap(null);
      data2.setMap(map);
    } else {
      data1.setMap(map);
      data2.setMap(null);
    }
  });

  // data.addListener('mouseover', e => {
  //   data.overrideStyle(e.feature, {
  //     fillColor: '#0077ff',
  //     fillOpacity: 0.2
  //   });
  // });

  // data.addListener('mouseout', e => {
  //   data.revertStyle();
  // });
};

export default ShapeMap;
