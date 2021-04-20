//accessing mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library');

//schema definition
const Schema = mongoose.Schema;
const deleteAuthorSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String 
});

//model creation
var deleteAuthordata = mongoose.model('deleteauthordata',deleteAuthorSchema);

module.exports = deleteAuthordata;











