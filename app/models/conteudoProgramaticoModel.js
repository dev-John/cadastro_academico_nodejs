
module.exports = function(){
    this.getConteudos = function(connection,callback){
        let sql = 'select * from conteudoprogramatico';
        connection.query(sql,callback);
    }

    this.storeConteudo = function(conteudoprogramatico, connection, callback){
        connection.query('insert into conteudoprogramatico set ?',conteudoprogramatico, callback);
    }

    return this;
}
