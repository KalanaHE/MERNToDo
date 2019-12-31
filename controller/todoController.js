
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb+srv://calculus:helloworld@todo-uwl1f.mongodb.net/test?retryWrites=true&w=majority')

//create a schema (the blueprint)
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'Buy flowers for her'}).save(function(err){
    if(err) throw err;
    console.log('Item saved');
});

//var data = [{item:'Go to work'},{item:'Have lunch'},{item:'Sleep'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo',function(req, res){
        res.render('todo',{todos:data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo',function(req, res){

    });
    
};