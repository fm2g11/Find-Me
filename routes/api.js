var express = require('express');
var router = express.Router();
var Sample = require('../database/models/sample');
var db = require('../database/db_create');


router.get('/sample', function(req, res, next) {
  Sample.find({}, function(err, sample) {
  	// if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) res.send(err);
            
    res.json(sample); 
  });
});

router.get('/create_db', function(req, res, next) {
	db.dropDB();
	db.createDB(req, res);
});

router.get('*', function(req, res, next) {
  res.send('Not Found');
});

module.exports = router;
