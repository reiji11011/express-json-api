var express = require('express');
var router = express.Router()

// ルーティング
router.get('/', function(req, res){
    res.json({
        message: "Hellor World"
    });
});

// URLとファイルのマッピング
router.use('/article', require('./article.js'));
router.use('/user', require('./user.js'));

module.exports = router;