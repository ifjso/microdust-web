import React from 'react';
import './HoverMarker.scss';

const HoverMarker = ({ $hover, text }) => (
  <div className={`marker ${$hover ? 'hover' : ''}`}>{text}</div>
);

export default HoverMarker;
