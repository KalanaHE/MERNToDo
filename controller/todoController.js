
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb+srv://calculus:helloworld@todo-uwl1f.mongodb.net/test?retryWrites=true&w=majority')

//create a schema (the blueprint)
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item:'Go to work'},{item:'Have lunch'},{item:'Sleep'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo',function(req, res){
        //get data from mongoDB and pass it to view
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo',{todos:data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res){
        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item',function(req, res){
        //delete the requested item from db
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });
    
};