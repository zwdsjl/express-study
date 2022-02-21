var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var cookieValidator = require('./cookieValidator');

async function validateCookies(req, res, next) {
    await cookieValidator(req.cookies);
    next();
}

router.use(cookieParser());
router.use(validateCookies);
router.use(function(err,req, res, next) {
    res.status(400).send(err.message);
})
router.get('/', function(req, res){
    res.send("Hello Birds!");
});
router.get('/about',function(req, res){
    res.send('About birds');
});

module.exports = router;