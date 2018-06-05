import React from 'react';
import PropTypes from 'prop-types';

const Geolocation = ({latitude, longitude}) => (
    <div>
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </div>
)

Geolocation.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
}
export default Geolocation;