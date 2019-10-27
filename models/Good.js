const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    properties: {
        type: String
    },
    quantity: {
        type: Number
    },
    photo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestames: true
});

const Good = mongoose.model('good', GoodSchema);
module.exports = Good;