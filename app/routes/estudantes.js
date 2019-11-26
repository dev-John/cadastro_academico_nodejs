
module.exports = function(app){
	app.get('/estudantes', function (req, res) {

        let controller = app.app.controllers.estudantesController;

        controller.getEstudantes(app,req,res);

	});
}
