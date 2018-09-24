'use strict';

const mongoose = require('mongoose');
const UserModel = require('../models/user');

class UserService {

    constructor(model) {
        this.model = model;
    }

    createUser(options, callback) {
        const model = new this.model(options);

        model.save((err, userModel) => callback(err, userModel));
    }

}

module.exports = new UserService(UserModel);