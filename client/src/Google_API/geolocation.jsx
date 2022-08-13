import React from 'react';

// Converts provided zipcode over to latitude and longitude that will be used elsewhere for calculating distance between locations.
function GeoConverter(zipcode) {
  let getGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${process.env.GOOGLE_API_TOKEN}`;

  const test = axios.post(getGeo)
  test.then(response => {
    const geos = response.data.results[0].geometry.location;
    console.log(geos);
  });

export default GeoConverter;




