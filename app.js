const express = require('express');

//init app
const app = express();

//view location
app.set('views',__dirname + '/views');

//set template engine
app.set('view engine', 'ejs');

//setup MongoDb
const MongoClient =require ('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017/todolist';

//connecting to mongodb
MongoClient .connect(mongoUrl, function(error , db)   {
	if (error)
	{
		console.log(error);
	}

    else
    {
    	console.log ('data base connected successfuly');
     todos = db.collection('todos');   

    }
     });
//routes
app.get('/',function(req, res){
	res.render("index", {name: "Faqja Fillestare", title: "index"});

});

app.get('/todos/:id', function (req, res){
	res.render('show');

});

app.post('/todos/add',function(req, res){
	res.redirect('/');

});


app.get('/todos/edit/:id',function(req, res){
	res.render('edit');

});




app.post('/todos/edit/:id',function(req, res){
	res.redirect('/');

});



app.get('/todos/delte/:id',function(req, res){
	res.redirect('/');

});


//running app
app.listen(3000,function (){
	console.log('App running at https://localhost:3000');
});

