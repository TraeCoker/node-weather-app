const request = require('postman-request')

const forecast = (latitude, longitude, callback) =>{
    const url = `http://api.weatherstack.com/current?access_key=f1bb613931f7e93ccad8cf248bdff5b3&query=${latitude},${longitude}&units=f`
    request({url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather services!')
        } else if (response.body.error){
            callback('Unable to find location.')
        } else {
            callback(null, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`)
        }
    })
}

module.exports = forecast