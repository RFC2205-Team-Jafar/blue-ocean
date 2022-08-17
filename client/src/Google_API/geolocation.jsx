import React, {useEffect} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

// Async function that converts zipcode into latitude and longitude with Google API
const geoConverter = function(zipcode) {
  let token = '[API_KEY]'; // TODO add Google API KEY
  let getGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${token}`;
  const geoConverter = axios.post(getGeo);
  return geoConverter.then(response => {
    const geos = response.data.results[0].geometry.location;
    return geos;
  });
}

export default geoConverter;




