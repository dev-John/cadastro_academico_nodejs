module.exports = function () {

    // this.getEstudantes = function(app, req, res) {

    //     let db = app.config.dbConnection();
    //     let estudantesModel = app.app.models.estudantesModel;
    
    //     estudantesModel.getEstudantes(db, function(error,result){
    //         res.render('estudantes/estudantes',{estudantes:result});
    //     })

    // }

    // this.authenticate = function(app,req,res) {

    //     let usuario = req.body;

    //     req.assert("username", "Usuário é obrigatório").notEmpty();
    //     req.assert("password", "Senha é obrigatória").notEmpty();

    //     var erros = req.validationErrors();
    //     if (erros) {
    //         res.render('admin/cadastroUsuario', { erros: erros, usuario: usuario });
    //         return;
    //     }
    // }

    this.storeUser = function(app,req,res) {

        let usuario = req.body;

        req.assert("nome", "Nome é obrigatório").notEmpty();
        req.assert("username", "Usuário é obrigatório").notEmpty();
        req.assert("password", "Senha é obrigatória").notEmpty();

        req.assert("username", "Usuário deve conter no mínimo 6 caracteres").isLength({min:6});
        req.assert("password", "Senha deve conter no mínimo 6 e no máximo 20 caracteres").notEmpty();

        var erros = req.validationErrors();
        if (erros) {
            res.render('admin/cadastroUsuario', { erros: erros, usuario: usuario });
            return;
        }

        let db = app.config.dbConnection();
        let usuarioModel = app.app.models.usuarioModel;

        usuarioModel.storeUser(usuario, db, function (error, result) {
            console.log(error);
            res.redirect('/');
        });
    }
  
    return this;
}
  