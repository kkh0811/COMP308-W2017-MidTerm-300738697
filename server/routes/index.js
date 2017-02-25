/*
#######################################################################################
The name of source file : index.js
The information of author :  Giho Kim
The student number: 300738697
Web App name: COMP308-W2017-MIDTERM
#######################################################################################
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
