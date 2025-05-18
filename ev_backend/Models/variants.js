const mongoose = require('mongoose');

const VariantsSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String, // path or filename
        required: true,
    }
}, { _id: false });

module.exports = VariantsSchema;