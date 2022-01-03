const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(-75.706788, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

geocode('Springfield Missouri', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})