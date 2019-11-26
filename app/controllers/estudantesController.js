module.exports = function () {

    this.getEstudantes = function(app, req, res) {

        let db = app.config.dbConnection();
        let estudantesModel = app.app.models.estudantesModel;
    
        estudantesModel.getEstudantes(db, function(error,result){
            console.log(error)
            res.render('estudantes/estudantes',{estudantes:result});
        })

    }

    this.storeEstudante = function(app,req,res) {

        let db = app.config.dbConnection();
        let estudante = req.body;
        let estudantesModel = app.app.models.estudantesModel;

        estudantesModel.storeEstudante(estudante, db, function (error, result) {
            res.redirect('/estudantes');
        });
    }
  
    return this;
}
  