module.exports = function(app){
    app.post('/estudante/salvar',function(req,res){
        let estudante = req.body;
		let connection = app.config.dbConnection();
		let estudantesModel = app.app.models.estudantesModel;

		estudantesModel.storeEstudante(estudante, connection, function (error, result) {
			res.redirect('/estudantes');
		});
    })
}