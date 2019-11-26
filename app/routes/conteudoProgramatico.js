
module.exports = function(app){
	app.get('/conteudoProgramatico', function (req, res) {

        let controller = app.app.controllers.conteudoProgramaticoController;

        controller.getConteudos(app,req,res);

	});
}
