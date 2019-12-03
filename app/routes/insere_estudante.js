module.exports = function(app){
    app.get('/insere_estudante', function(req,res){
        let erros;
		res.render('admin/insere_estudante', { erros: erros, estudante: {} });
    })
}