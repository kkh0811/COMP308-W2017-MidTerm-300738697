/*
#######################################################################################
The name of source file : books.js
The information of author :  Giho Kim
The student number: 300738697
Web App name: COMP308-W2017-MIDTERM
#######################################################################################
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });
});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
  res.render('books/details', { // to direct details page.
    title: "Add a new Book", // add title for the page.
    books: '' // should be null for default page
  });
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
  book.create({ 
    "Title": req.body.title, // to bring data from textfield
    "Price": req.body.price,
    "Author": req.body.author,
    "Genre": req.body.genre
  }, (err, book) => {
    if(err) { //if occurs error, shows the error on the consle
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/books'); // if no error, redirect to books page.
    }
  });
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    let id = req.params.id; // search book id 

    book.findById(id, (err, books) => { // come up with bookId from html
      if(err) {
      console.log(err);
      res.end(err);
    } else {
      res.render('books/details', {
        title: 'Book Detail',
        books: books
      })
    }
    });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    let id = req.params.id;
    let books = new book({
      "_id": id,
      "Title": req.body.title, // to get data from textfield
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre
    });

    book.update({ _id: id}, books, (err) => { // update book based on book id
      if(err) {
        console.log(err);
        res.end(error);
      }
      else {
        res.redirect('/books');
      }
    });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id;

  book.remove({_id: id}, (err) => { // delete book based on book id
    if(err) {
      console.log(err);
      res.end(err);
    }
    else {
      res.redirect('/books');
    }
  });
});


module.exports = router;
