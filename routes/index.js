var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/ch01', function(req, res, next) {
  res.render('ch01', { title: 'NoTitle' });
});

router.get('/ch02', function(req, res, next) {
  res.render('ch02', { title: 'NoTitle' });
});

router.get('/ch03', function(req, res, next) {
  res.render('ch03', { title: 'NoTitle' });
});

router.get('/ch04', function(req, res, next) {
  res.render('ch04', { title: 'NoTitle' });
});


module.exports = router;