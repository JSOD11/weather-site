const request = require('request')

const forecast = (lat, lon, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5968bda059da98a9b3591720d7241cff&query=' + lat + ',' + lon + '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined)
    } else if (body.error) {
      callback("Unable to find location.", undefined)
    } else {
      data = body.current
      callback(undefined, {
        description: data.weather_descriptions[0],
        temperature: data.temperature,
        feelslike: data.feelslike
      })
    }
  })
}

module.exports = forecast