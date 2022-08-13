// Gets users current location
const UserLocation = () => {
  let geos = {}
  const options = {
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(success, error, options);
  // Converts data to match the same object shape as Google's API to make DB calls simpler
  function success(pos) {
    geos.lat = pos.coords.latitude;
    geos.lng = pos.coords.longitude;
  }
  // Log warning if user has location turned off or other errors
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
}

export default UserLocation;