const express = require('express')
const app = express()
const router = require('./Route/IndexRoute')
const path = require('path')
const bodyparser=require('body-parser')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/user", {
	useNewUrlParser: true,
	useUnifiedTopology: true
},(err)=>{
    if(err) console.log(err)
    console.log('Database Connected!!')
})
app.use('/index',router)

app.listen(8000,function(){
    console.log("Server Runing")


    
})