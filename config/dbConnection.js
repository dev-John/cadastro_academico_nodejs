require('dotenv/config');
let mysql = require('mysql');

let connMySQL = function() {
    return connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
}

module.exports = function(){
    return connMySQL;
}