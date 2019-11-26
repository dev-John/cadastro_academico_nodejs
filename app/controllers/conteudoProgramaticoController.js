module.exports = function () {

    this.getConteudos = function(app,req,res) {

        let db = app.config.dbConnection();
        let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

        conteudoProgramaticoModel.getConteudos(db, function(error,result){
            res.render('admin/conteudoProgramatico',{conts:result}); //view/ejs
        })
    }

    this.storeConteudo = function(app,req,res) {
        let conteudo = req.body;
        let db = app.config.dbConnection();
        let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

        conteudoProgramaticoModel.storeConteudo(conteudo,db, function(error,result){
            res.redirect('/conteudoProgramatico');
        })

    }

    this.deleteConteudo = function(app,req,res) {
        let id = req.body.id;
        let db = app.config.dbConnection();
        let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

        conteudoProgramaticoModel.deleteConteudo(id, db, function(error, result) {
			res.redirect('/conteudoProgramatico');
		});
    }
  
    return this;
}

// app.post('/conteudoProgramatico/salvar',function(req,res){
//     let conteudo = req.body;
//     let connection = app.config.dbConnection();
//     let contProgModel = app.app.models.conteudoProgramaticoModel;

//     contProgModel.storeConteudo(conteudo, connection, function (error, result) {
//         res.redirect('/conteudoProgramatico');
//     });
// });

// this.storeConteudo = function(conteudoprogramatico, connection, callback){
//     connection.query('insert into conteudoprogramatico set ?',conteudoprogramatico, callback);
// }

// this.deleteConteudo = function(id, connection, callback){
//     connection.query('delete from conteudoprogramatico where idconteudoprogramatico = ?', id, callback);
// }