module.exports = function(app){
	app.get('/professores', function (req, res) {

		let connection = app.config.dbConnection();

		let sql = 'select * from professores';
		connection.query(sql, function (error, result) {
			res.render('professores/professores', {professores:result});
		});	

	});
}
