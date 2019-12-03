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