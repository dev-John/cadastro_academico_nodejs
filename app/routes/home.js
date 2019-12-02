module.exports = function(app){
	app.get('/', function(req, res){
		res.render('home/index');
	});

	app.post('inserirEstudantes', function(req,res){
		res.render('admin/insere_estudante');
	})

	app.post('listarNotas', function(req,res){
		res.render('/notas');
	})

	app.post('listarProfessores', function(req,res){
		res.render('professores/professores');
	})
}