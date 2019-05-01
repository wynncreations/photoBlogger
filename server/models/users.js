//Require Mongoose
var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id:String,
  username:String,
  password:String,
  firstName:String,
  lastName:String,
  fullName:String,
  dateCreated:String
});

UserSchema.plugin(passportLocalMongoose);;

//Export function to create "SomeModel" model class
module.exports = mongoose.model('User', UserSchema );
