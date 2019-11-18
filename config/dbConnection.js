let mysql = require('mysql');

let connMySQL = function() {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'teste',
        database: 'dsw'
    });
}

module.exports = function(){
    return connMySQL;
}