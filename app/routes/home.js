module.exports = function(app){
	app.get('/', function(req, res){
		res.render('home/index');
	});

	app.post('inserir_estudante', function(req,res){
		res.render('admin/insere_estudante');
	})
}