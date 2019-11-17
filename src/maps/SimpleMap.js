import React from 'react';
import GoogleMap from './GoogleMap';

const SimpleMap = ({
  center = { lat: 35.993201, lng: 127.759226 },
  zoom = 7,
  options,
  handleApiLoaded = x => x,
  children
}) => (
  <GoogleMap
    defaultCenter={center}
    defaultZoom={zoom}
    options
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
  >
    {children}
  </GoogleMap>
);

export default SimpleMap;
