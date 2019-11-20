
module.exports = function(app){
	app.get('/estudantes', function (req, res) {

        let connection = app.config.dbConnection();
        let estudantesModel = app.app.models.estudantesModel;

        estudantesModel.getEstudantes(connection, function(error,result){
            res.render('estudantes/estudantes',{estudantes:result});
        })
	});
}
