const mongoose = require('mongoose');

const opts = {
    autoReconnect    : true,
    keepAlive        : true,
    reconnectTries   : 100,
    reconnectInterval: 30000,
    useNewUrlParser  : true
};

module.exports.connect = function ({mongo: {host, port, dbName}}, callback) {

    mongoose.connect(`mongodb://${host}:${port}/${dbName}`, opts, err => {
        if (err) {
            console.error('MongoDB connection error: ', err);
            return callback(err);
        }

        const db = mongoose.connection;

        module.exports.db = db;

        db.on('error', error => {
            console.error(`database: ${error.message}`);
            //throw error;
        });

        db.on('disconnect', error => {
            console.error(`database disconnect: ${error.message}`);
            //throw error;
        });

        db.on('reconnectFailed', error => {
            console.error(`database reconnectFailed: ${error.message}`);
            //throw error;
        });

        callback(null, db);
    });

};

module.exports.disconnect = function (callback) {
    mongoose.disconnect(err => {
        if (err) {
            console.error('MongoDB disconnect error: ' + err);
            return callback(err);
        }

        callback();
    });
};


