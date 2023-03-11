const request = require('request') // require request module

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianNvZCIsImEiOiJjbGVrZmtpeXkwMTBmM3lzMHlkdm41MjR6In0.dqLATrPTnTb6x4UGrLpACg'
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services.\n", undefined)
    } else if (body.features.length === 0) {
      callback("Unable to find location.\n", undefined)
    } else {
      data = body.features[0]
      //callback(undefined, (data.place_name + ": " + data.center[1] + ", " + data.center[0]))
      callback(undefined, {
        latitude: data.center[1],
        longitude: data.center[0],
        location: data.place_name
      })
    }
  })
}

module.exports = geocode