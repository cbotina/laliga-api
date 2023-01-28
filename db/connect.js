const mongoose = require('mongoose').set('strictQuery',false)// preparing the future

const connectDB = (url) => {
    return mongoose.connect(url)// ? Returns a 'promise'
}

module.exports = connectDB