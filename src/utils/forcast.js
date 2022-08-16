const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8d99f5b58da6d405f73a6c22659140d7`
    request({ url:url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
             callback(response.body.weather[0].description + ' It is currently ' + response.body.main.temp +  ' degress out.');
        }
    })
}

module.exports = forecast