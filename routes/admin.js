const express = require('express');
const admin = express();
const router = express.Router();

admin.on('mount',function(parent){
    console.log('Admin mount');
});

router.get('/',function(req,res){
    res.send('Admin HomePage');
});

router.get('/:id',function(req,res){
    res.send('Admin ID:'+req.params.id);
});
admin.use('/',router);
module.exports = admin;