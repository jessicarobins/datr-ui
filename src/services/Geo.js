async function getPosition() {
  if ('geolocation' in navigator) {
    const { coords } = await new Promise(((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
      })
    }))

    return coords
  }
  return Promise.reject(new Error('Geolocation is not available'))
}

export default getPosition
