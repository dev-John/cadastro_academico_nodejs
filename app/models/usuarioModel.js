
module.exports = function(){

    // this.getEstudantes = function(connection,callback){
    //     let sql = 'select * from estudantes';
    //     return connection.query(sql,callback);
    // }

    this.storeUser = function(usuario, connection, callback){
        console.log(usuario)
        connection.query('insert into usuarios set ?',usuario, callback);
    }

    this.authenticate = function(usuario, connection, callback){
        console.log("AUTHHHH");
        connection.query('select * from usuarios where username = ?', usuario.username, callback);    
    }

    return this;
}