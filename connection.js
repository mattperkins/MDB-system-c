const mongoose = require('mongoose')

// ES6 Promises
mongoose.Promise = global.Promise

// connect to mongodb
mongoose.connect('mongodb://fred:testtest@ds237620.mlab.com:37620/systemc')

mongoose.connection.once('open', ()=>{
    console.log('Connection has been made...')
}).on('error', (error)=>{
    console.log('Connection error:', error)
})