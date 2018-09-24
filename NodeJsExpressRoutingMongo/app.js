'use strict';

const path = require('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routers');

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });

    const allowCrossDomain = function (req, res, next) {
        const origin = req.headers['origin'];

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, authorization, Authorization');

        if (/Trident/.test(origin)) {
            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        }

        if (req.method === 'OPTIONS') {
            return res.status(200).send();
        }

        next();
    };

    app.use(allowCrossDomain);

    app.use(logger('dev'));
    app.use(bodyParser.json({limit: '500mb'}));
    app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));

    app.use(router);
};
