const mongoose = require('mongoose');
const schema = mongoose.Schema;
let studentschema = new schema({
    studentID:{type:Number},
    studentname:{type:String},
    email:{type:String},
    phonenumber:{type:Number},
    gender:{type:String},
    dept:{type:String},
    batch:{type:Number}
})
module.exports = mongoose.model('student',studentschema)