const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/login-react")
 .then(()=>{
  console.log('Connected Success')
 })
 .catch(()=>{
    console.log('Failed')
 });

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('User', newSchema);

module.exports = User

