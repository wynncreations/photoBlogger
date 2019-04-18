//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  id:String,
  title:String,
  body:String,
  dateCreated:Date,
  author_id:String,
  author_name:String,
  tags:[String],
  url:String
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Blog', BlogSchema );







