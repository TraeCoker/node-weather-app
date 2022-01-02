const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=f1bb613931f7e93ccad8cf248bdff5b3&query=New%20York&units=f'

request({url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ".")
    console.log(`It is currently ${response.body.current.temperature} degrees out.`)
    console.log(`It feelse like ${response.body.current.feelslike} degrees out`)
})