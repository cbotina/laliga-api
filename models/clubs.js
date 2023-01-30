const mongoose = require('mongoose')
const ClubSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'],
        trim: true
    },
    stadium: {
        type: String,
        required: [true, 'Stadium is required'],
        trim: true
    },
    number_of_players: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('Club', ClubSchema)