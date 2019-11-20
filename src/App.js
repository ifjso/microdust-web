import React from 'react';
import ShapeMap from './components/Map/ShapeMap';

const App = () => (
  <ShapeMap
    center={{ lat: 35.993201, lng: 127.759226 }}
    zoom={7}
    options={{
      minZoom: 7,
      maxZoom: 11,
      restriction: {
        latLngBounds: {
          north: 43.522419,
          south: 28.291993,
          west: 116.637253,
          east: 138.346238
        },
        strictBounds: true
      }
    }}
  />
);

export default App;
