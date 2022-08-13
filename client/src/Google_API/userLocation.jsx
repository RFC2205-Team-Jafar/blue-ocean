// Grab user location in the background when called
exports.UserLocation() {
  try {
    const position = await getCurrentPosition()
    const geos = { lat: position.coords.latitude, lng: position.coords.longitude }
  } catch (err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      )
    })
  }
  console.log(geos)
  // Use context to set global state for location
}