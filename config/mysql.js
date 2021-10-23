const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "development": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DEV_DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.TEST_DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.PROD_DATABASE_NAME,
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
