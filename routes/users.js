var express = require('express');
var router = express.Router();
var fs = require('fs');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

/* GET users listing. */
router.all('/', function(req, res, next) {

  console.log('query: ',req.query);
  console.log('body',req.body);
  console.log('params',req.params());
  res.json(req.query);
});

router.param('id',function(req, res, next,id){
  console.log('CALLED ONLY ONCE!',id);
  next();
})

router.get('/:id', function(req, res, next) {
  res.send('ID: ' + req.params.id);
});

router.get('/about/:id', function(req, res, next) {
  res.send('ID: ' + req.params.id);
});
router.use(function(req, res, next) {
  if(req.originalUrl=== '/users/978') return next('router');
  next();
});

module.exports = router;
