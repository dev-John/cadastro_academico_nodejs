module.exports = function(app){
	
    app.post('/estudante/salvar',function(req,res){
        let estudante = req.body;
		let connection = app.config.dbConnection();
		let estudantesModel = app.app.models.estudantesModel;

		estudantesModel.storeEstudante(estudante, connection, function (error, result) {
			res.redirect('/estudantes');
		});
	});
	
	app.post('/conteudoProgramatico/salvar',function(req,res){
        let conteudo = req.body;
		let connection = app.config.dbConnection();
		let contProgModel = app.app.models.conteudoProgramaticoModel;

		contProgModel.storeConteudo(conteudo, connection, function (error, result) {
			res.redirect('/conteudoProgramatico');
		});
	});
	
	app.post('/conteudoProgramatico/excluir', function(req,res){
		let id = req.body.id;
		let connection = app.config.dbConnection();
		let deleteContProgModel = app.app.models.conteudoProgramaticoModel;

		deleteContProgModel.deleteConteudo(id, connection, function(error, result) {
			res.redirect('/conteudoProgramatico');
		});
	})

	// conts[i].idconteudoprogramatico
}