import React from 'react';
import GoogleMap from './GoogleMap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = ({ center = { lat: 37.545, lng: 126.992 }, zoom = 7 }) => (
  <GoogleMap defaultCenter={center} defaultZoom={zoom}>
    <AnyReactComponent lat={37.545} lng={126.992} text="My Marker" />
  </GoogleMap>
);

export default SimpleMap;
