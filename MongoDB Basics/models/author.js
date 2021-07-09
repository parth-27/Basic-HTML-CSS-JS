const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creaeting schema and model

const bookSchema = new Schema({
    title: String,
    pages: Number,
});

const authorSchema = new Schema({
    name: String,
    age: Number,
    books: [bookSchema],    // nesting the schemas
});


// 'author' is the name of the model based on authorSchema
const Author = mongoose.model('author', authorSchema);

// exporting the module
module.exports = Author;
