var express = require('express');
var todoController = require('./controller/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//port
app.listen(3000);