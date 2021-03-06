import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../../config/googleApiKey';

const GoogleMap = ({ children, ...props }) => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_API_KEY, v: 3.39 }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);
export default GoogleMap;
