import find from 'lodash/find';
import { getColor, getOpacity } from '../../utils/helper/color-helper';
import { getCity } from '../../utils/helper/cities-helper';
import CTPRVN from '../../data/CTPRVN';
import SEOUL from '../../data/SEOUL';

const loadMapShapes = async (map, maps, data, microdustsBySido) => {
  const data1 = new maps.Data({ map });
  const data2 = new maps.Data({ map });
  const latLngs = {};

  data1.addGeoJson(CTPRVN);
  data2.addGeoJson(SEOUL);

  data1.forEach(feature => {
    const city = getCity(feature.getProperty('CTP_ENG_NM'));
    feature.setProperty('value', data[city]);
    const latLngBounds = new maps.LatLngBounds();
    feature.getGeometry().forEachLatLng(latLng => latLngBounds.extend(latLng));
    Object.assign(latLngs, { [city]: latLngBounds.getCenter() });
  });

  data2.setMap(null);

  data2.forEach(feature => {
    feature.setProperty(
      'value',
      find(microdustsBySido, { cityNameEng: feature.h.SIG_ENG_NM }).pm10Value
    );
  });

  data1.setStyle(feature => {
    return {
      strokeColor: '#fff',
      strokeWeight: 1,
      cursor: 'url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur)',
      fillColor: getColor(feature.getProperty('value')),
      fillOpacity: getOpacity(feature.getProperty('value'))
    };
  });

  data2.setStyle(feature => {
    return {
      strokeColor: '#fff',
      strokeWeight: 1,
      cursor: 'url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur)',
      fillColor: getColor(feature.getProperty('value')),
      fillOpacity: getOpacity(feature.getProperty('value'))
    };
  });

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

  return latLngs;
};

export { loadMapShapes };
