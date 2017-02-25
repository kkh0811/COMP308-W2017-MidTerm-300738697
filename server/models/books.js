/*
#######################################################################################
The name of source file : books.js
The information of author :  Giho Kim
The student number: 300738697
Web App name: COMP308-W2017-MIDTERM
#######################################################################################
*/

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
