import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../config/googleApiKey';

const GoogleMap = ({
  center = { lat: 35.993201, lng: 127.759226 },
  zoom = 7,
  options,
  handleApiLoaded = x => x
}) => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
      options
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    />
  </div>
);

export default GoogleMap;
