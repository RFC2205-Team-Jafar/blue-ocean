// Grab user location in the background when called
// Invoke as Promise?
const userLocation = async function() {
  let geos;
  try {
    const position = await getCurrentPosition()
    geos = { lat: position.coords.latitude, lng: position.coords.longitude }
  } catch (err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  function getCurrentPosition() {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error),
        options
      )
    })
  }
  console.log(geos)
  //TODO
  // Use context to set global state for location
}

export default userLocation;