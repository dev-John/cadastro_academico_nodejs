module.exports = function(app){
	
    app.post('/estudante/salvar',function(req,res){
		let controller = app.app.controllers.estudantesController;
		//chama o controller
		controller.storeEstudante(app,req,res);
	});

	app.post('/usuario/cadastrar',function(req,res){
		let controller = app.app.controllers.authController;
		//chama o controller
		controller.storeUser(app,req,res);
	})

	app.post('/usuario/autenticar',function(req,res){
		let controller = app.app.controllers.authController;
		//chama o controller
		controller.authenticate(app,req,res);
	})
	
	app.post('/conteudoProgramatico/salvar',function(req,res){
		let controller = app.app.controllers.conteudoProgramaticoController;
		//chama o controller
		controller.storeConteudo(app,req,res);
	});
	
	app.post('/conteudoProgramatico/excluir', function(req,res){
		let controller = app.app.controllers.conteudoProgramaticoController;
		//chama o controller
		controller.deleteConteudo(app,req,res);		
	})

}