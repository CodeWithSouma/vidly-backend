const Joi = require('joi');
const mongoose = require('mongoose');
  
const User = mongoose.model('User',new mongoose.Schema({
    name:{
      type:String,
      required:true,
      minlength:5,
      maxlength:50,
      trim:true
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024,
        trim:true,
    }
  }));

function validateUser(user) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;