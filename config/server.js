let express = require('express'); 
let consign = require('consign');
let body_parser = require('body-parser');
let app = express(); 

app.set('view engine', 'ejs'); 
app.set('views', './app/views');
app.use('/public', express.static('public'));
app.use(body_parser.urlencoded({extended:true}));

consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;