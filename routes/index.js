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


router.get('/ch04grid', function(req, res, next) {
  res.render('ch04grid', { title: 'NoTitle' });
});


router.get('/ch05', function(req, res, next) {
  res.render('ch05', { title: 'NoTitle' });
});


router.get('/ch06_gridof_ch05', function(req, res, next) {
  res.render('ch06_gridof_ch05', { title: 'NoTitle' });
});

router.get('/ch06', function(req, res, next) {
  res.render('ch06_grid_native', { title: 'NoTitle' });
});

router.get('/ch06_portafolio', function(req, res, next) {
  res.render('ch06_portafolio', { title: 'NoTitle' });
});


module.exports = router;