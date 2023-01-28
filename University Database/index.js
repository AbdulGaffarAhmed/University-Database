const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const bodyParser = require('body-parser');
const routes = require('./app.js');
const app = express();
const port = process.env.port || 2000;

mongoose.connect("mongodb://127.0.0.1:27017/University",{
useNewUrlParser : true,
useUnifiedTopology: true})
const db = mongoose.connection;
db.on('err',()=>{
    console.log("error");
})
db.once('open',()=>{
    console.log("connected");
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine','ejs');
app.use(express.static('public'))
app.use('/',routes)
app.listen(port)