const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=f1bb613931f7e93ccad8cf248bdff5b3&query=New%20York&units=f'

request({url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ".")
    console.log(`It is currently ${response.body.current.temperature} degrees out.`)
    console.log(`It feelse like ${response.body.current.feelslike} degrees out`)
})

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibG9uZ3dlaXJkd29yZCIsImEiOiJja3h4cWVoaG82Yzh2MnZva2pwbDUyYTVuIn0.urv987Kt8Zje9m5-p54EBw&limit=1'
request({url: geoURL, json: true}, (error, response) => {
    console.log(`lat: ${response.body.features[0].center[1]}, long: ${response.body.features[0].center[0]}`)
})