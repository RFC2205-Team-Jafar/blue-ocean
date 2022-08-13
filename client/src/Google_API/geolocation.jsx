// Converts provided zipcode over to latitude and longitude that will be used elsewhere for calculating distance between locations.
exports.GeoConverter(zipcode) {
  let getGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${process.env.GOOGLE_API_TOKEN}`;

  const geoConverter = axios.post(getGeo)
  geoConverter.then(response => {
    const geos = response.data.results[0].geometry.location;
    console.log(geos);
  });
}




