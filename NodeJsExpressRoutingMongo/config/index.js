'use strict';

const env = process.env;

const port = +env.PORT || 3000;
const domain = env.DOMAIN || '127.0.0.1';

module.exports = {
    port,
    domain,

    link: `http://${domain}:${port}`,

    mongo: {
        host    : env.MONGO_HOST || 'localhost',
        port    : +env.MONGO_PORT || 27017,
        dbName  : env.MONGO_DB_NAME || 'test',
        // user    : env.MONGO_USER_NAME || 'admin',
        // password: env.MONGO_USER_PASSWORD || 'admin'
    },
};
