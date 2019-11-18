let app = require('./config/server');

let port = 3000;

app.listen(port, function(){
	console.log('Servidor rodando com express na porta', port);
});