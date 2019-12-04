import React from 'react';
import './HoverMarker.scss';

const HoverMarker = ({ $hover, city, microdust }) => (
  <div className={`marker ${$hover ? 'hover' : ''}`}>
    <span>{city}</span>
    <span style={{ display: 'inline-block' }}>{microdust}</span>
  </div>
);

export default HoverMarker;
