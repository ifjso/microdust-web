import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../config/googleApiKey';

const GoogleMap = ({ children, ...props }) => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact bootstrapURLKeys={{ key: GOOGLE_API_KEY }} {...props}>
      {children}
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

GoogleMap.defaultProps = {
  children: null
};

export default GoogleMap;
