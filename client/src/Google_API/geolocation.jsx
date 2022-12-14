import React, {useEffect} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";

// Async function that converts zipcode into latitude and longitude with Google API
const geoConverter = function(zipcode) {
  let token = ''; // ANCHOR add Google API KEY
  let getGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${token}`;
  const geoConverter = axios.post(getGeo);
  return geoConverter.then(response => {
    const geos = response.data.results[0].geometry.location;
    console.log('geolocation geos: ', geos)
    return geos;
  })
  .catch(err => {
    console.warn(err)
  });
}

export default geoConverter;




