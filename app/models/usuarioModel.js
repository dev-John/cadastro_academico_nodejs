
module.exports = function(){

    // this.getEstudantes = function(connection,callback){
    //     let sql = 'select * from estudantes';
    //     return connection.query(sql,callback);
    // }

    this.storeUser = function(usuario, connection, callback){
        console.log(usuario)
        connection.query('insert into usuarios set ?',usuario, callback);
    }

    // this.authenticate =  function

    return this;
}