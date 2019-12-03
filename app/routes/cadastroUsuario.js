module.exports = function(app){
	app.get('/cadastroUsuario', function(req, res){
        let erros;
		res.render('admin/cadastroUsuario', { erros: erros, estudante: {} });
	});
}