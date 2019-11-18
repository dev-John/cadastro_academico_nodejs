module.exports = function(app){
	app.get('/insere_notas', function(req, res){
		res.render('admin/insere_notas');
	});
}