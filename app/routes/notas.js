
module.exports = function(app){
	app.get('/notas', function (req, res) {

		let connection = app.config.dbConnection();

		let sql = 'select * from estudantes';
		connection.query(sql, function (error, result) {
			res.render('notas/notas', {notas:result});
		});	

	});
}
