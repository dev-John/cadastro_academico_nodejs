module.exports = function(app){
	
    app.post('/estudante/salvar',function(req,res){
		let controller = app.app.controllers.estudantesController;
		//chamar o controller
		controller.storeEstudante(app,req,res);
	});
	
	app.post('/conteudoProgramatico/salvar',function(req,res){
		let controller = app.app.controllers.conteudoProgramaticoController;
		//chamar o controller
		controller.storeConteudo(app,req,res);
	});
	
	app.post('/conteudoProgramatico/excluir', function(req,res){
		let controller = app.app.controllers.conteudoProgramaticoController;
		//chamar o controller
		controller.deleteConteudo(app,req,res);		
	})

}