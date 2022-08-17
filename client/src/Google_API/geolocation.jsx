// Converts provided zipcode over to latitude and longitude that will be used elsewhere for calculating distance between locations.
import React, {useEffect} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

const geoConverter = function(zipcode) {
  let token = '';
  let getGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${token}`;

  const geoConverter = axios.post(getGeo);
  return geoConverter.then(response => {
    const geos = response.data.results[0].geometry.location;
    return geos;
  });
}

export default geoConverter;




