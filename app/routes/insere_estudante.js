module.exports = function(app){
    app.get('/insere_estudante', function(req,res){
        res.render('admin/insere_estudante');
    })
}