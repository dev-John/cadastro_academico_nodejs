module.exports = function () {

    this.getEstudantes = function(app, req, res) {

        let db = app.config.dbConnection();
        let estudantesModel = app.app.models.estudantesModel;
    
        estudantesModel.getEstudantes(db, function(error,result){
            res.render('estudantes/estudantes',{estudantes:result});
        })

    }

    this.storeEstudante = function(app,req,res) {

        let estudante = req.body;

        req.assert("nome", "Nome é obrigatório").notEmpty();
        //req.assert("cidade", "Cidade é obrigatório").notEmpty();
        //req.assert("data_nasc", "Data de Nascimento é obrigatório").notEmpty();
        req.assert("nota", "Nota é obrigatório").notEmpty();
        req.assert("email", "Email é obrigatório").notEmpty();

        var erros = req.validationErrors();
        if (erros) {
            res.render('admin/insere_estudante', { erros: erros, estudante: estudante });
            return;
        }

        let db = app.config.dbConnection();
        let estudantesModel = app.app.models.estudantesModel;

        estudantesModel.storeEstudante(estudante, db, function (error, result) {
            res.redirect('/estudantes');
        });
    }
  
    return this;
}
  