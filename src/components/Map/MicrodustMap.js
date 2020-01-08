import React, { useState } from 'react';
import SimpleMap from './SimpleMap';
import HoverMarker from '../Marker/HoverMarker';
import { loadMapShapes } from '../../utils/helper/map-helper';
import { getMicrodustsByCity, getMircordustsBySido } from '../../modules/api/airkorea-api';
import { getKorCity } from '../../utils/helper/cities-helper';

const MicrodustMap = ({ center = { lat: 35.993201, lng: 127.759226 }, zoom = 7, options }) => {
  const [microdustsByCity, setMicrodustsByCity] = useState([]);
  const [latLngs, setLatLngs] = useState({});

  const onLoad = async (map, maps) => {
    const microdusts = await getMicrodustsByCity();
    const microdustsBySido = await getMircordustsBySido();

    const {
      dataGubun,
      dataTerm,
      dataTime,
      itemCode,
      numOfRows,
      pageNo,
      resultCode,
      resultMsg,
      searchCondition,
      serviceKey,
      totalCount,
      _returnType,
      ...microdustsByCity
    } = microdusts[0];

    setMicrodustsByCity(Object.entries(microdustsByCity));

    const latLngs = await loadMapShapes(map, maps, microdustsByCity, microdustsBySido);
    setLatLngs(latLngs);
  };

  return (
    <SimpleMap center={center} zoom={zoom} options={options} onLoad={onLoad}>
      {Object.keys(latLngs).length > 0
        ? microdustsByCity.map((microdust, i) => (
            <HoverMarker
              key={i}
              lat={latLngs[microdust[0]].lat()}
              lng={latLngs[microdust[0]].lng()}
              city={getKorCity(microdust[0])}
              microdust={microdust[1]}
            />
          ))
        : ''}
    </SimpleMap>
  );
};

export default MicrodustMap;
