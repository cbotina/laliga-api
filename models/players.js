const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Must provide a name'],
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'Must provide an age']
    },
    position: {
        type: String,
        required: [true, 'Position is required']
    },
    club: {
        type: String, 
        required: [true, 'Club is required']
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    }    

})

module.exports = mongoose.model('Player', PlayerSchema)