const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibG9uZ3dlaXJkd29yZCIsImEiOiJja3h4cWVoaG82Yzh2MnZva2pwbDUyYTVuIn0.urv987Kt8Zje9m5-p54EBw&limit=1`
    request({url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to location services')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try again with different search terms.')
        } else {
            callback(null, {
                lattitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode