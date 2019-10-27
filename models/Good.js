const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    properties: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Good = mongoose.model('goods', GoodSchema);