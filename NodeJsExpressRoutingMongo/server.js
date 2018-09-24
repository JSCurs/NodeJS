'use strict';

const http = require('http');
const express = require('express');

const database = require('./db');
const config = require('./config');

const app = express();
const port = config.port;
const domain = config.domain;
const server = http.createServer(app);

function onListening() {
    console.log(domain, port);

    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.info('Listening on ' + bind);

    console.log('\nhttp://' + domain + ':' + port + '/');
}

function init() {
    require('./app')(app);

    server.listen(port, domain);
}

server.on('listening', onListening);

database.connect(config, function (err) {
    if (err) {
        return console.error(err);
    }

    init();
});