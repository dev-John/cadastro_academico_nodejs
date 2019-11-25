
module.exports = function(app){
	app.get('/conteudoProgramatico', function (req, res) {

        let connection = app.config.dbConnection();
        let conteudoProgramaticoModel = app.app.models.conteudoProgramaticoModel;

        conteudoProgramaticoModel.getConteudos(connection, function(error,result){
            res.render('admin/conteudoProgramatico',{conts:result}); //view/ejs
        })
	});
}
