const express = require('express');

//init app
const app = express();

//routes
app.get('/',function(req , res){
	res.send("hello from index");
})

//running app
app.listen(3000,function (){
	console.log('App running at https://localhost:3000');
});
