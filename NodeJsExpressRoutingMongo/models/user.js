'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        firstName: {
            type    : String,
        },

        lastName: {
            type    : String,
        }
    },
    {
        collection: 'Users'
    });

module.exports = mongoose.model('User', schema);
