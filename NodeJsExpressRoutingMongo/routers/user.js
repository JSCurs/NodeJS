'use strict';

const express = require('express');

const router = express.Router();

const userService = require('../dbService/user');

router.post('/', function (req, res, next) {
    const {firstName, lastName} = req.body;

    if (!firstName || !lastName) {
        return next(new Error({message: 'Not found firstName, or lastName'}))
    }

    userService.createUser({
        firstName,
        lastName
    }, function (err, userModel) {
        if (err) {
            return next(err);
        }

        res.status(201).send(userModel);
    })

});

module.exports = router;