'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: 'Kindly enter a name'
    },
    birthday: {
        type: Date,
        default: Date.now
    }
},
    { collection: 'user' });

module.exports = mongoose.model('Users', UserSchema);