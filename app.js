const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=f1bb613931f7e93ccad8cf248bdff5b3&query=New%20York'

request({url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})