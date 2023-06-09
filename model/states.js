const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    state: {
        required: true,
        type: String
    },
    capital: {
        required: true,
        type: String
    },
    funFacts: [{
        required: false
            type: String
    }]
})

module.exports = mongoose.model('Data', dataSchema)
