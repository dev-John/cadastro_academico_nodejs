module.exports = function(app){
	app.get('/login', function(req, res){
        let erros;
		res.render('admin/login', { erros: erros, estudante: {} });
	});
}