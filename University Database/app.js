const express = require('express');
const Router= express.Router();
const Schema = require('./schema');
const app = express();
Router.get('/Add',(err,res)=>{
    res.render('add')
})
Router.post('/',(req,res)=>{
    const studentID = req.body.studentID;
    const studentname = req.body.studentname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const gender = req.body.gender;
    const dept = req.body.dept;
    const batch = req.body.batch;
    
    const schema = new Schema({studentID,studentname, email,phonenumber,gender,dept,batch})
   schema.save(err=>{
    if(err){
        console.log("err is")
    }else{
        res.redirect('/');
    }
   })
})
Router.get('/',(req,res)=>{
    Schema.find((err,data)=>{
        if(err) {
            console.log("error")
        }
        res.render('index',{
            students : data
        })
        // console.log(data);
    })
})
Router.get('/update/:studentID',(req,res)=>{
    // console.log(req.params.studentID)
    Schema.findOneAndUpdate({studentID:req.params.studentID},req.body,{new:true},(err,data)=>{

    if(err){
        console.log("cant Update")
    }else{
       res.render('update',{
        data : data
    })
        }
    })
    })
    Router.post('/update/:studentID',(req,res)=>{
        Schema.findOneAndUpdate({studentID:req.params.studentID},req.body,(err,data)=>{
            if(err){
                console.log("errrrrrr")
            }else{
                res.redirect('/')
            }
        })
    })
    Router.get('/delete/:studentID',(req,res)=>
    {
        Schema.findOneAndDelete({studentID:req.params.studentID},req.body,(err,data)=>
        {
            if(err){
                console.log("errrr haiiii")
            }else{
                console.log("deleted")
                res.redirect('/')
            }
        })
    })
    Router.get('/API', async(req,res) => {
        const schema = await Schema.find({});
        try{
        res.send(schema);
        }
        catch( error )
        {
        res.status(500).send(error);
        }
        });
module.exports = Router;