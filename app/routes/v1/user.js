var express = require('express');
var router = express.Router();

router.get('/test', function(req, res){
    res.json({
        massage: "This is user api"
    });
});

module.exports = router;