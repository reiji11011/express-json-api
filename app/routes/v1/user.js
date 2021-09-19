var express = require('express');
var router = express.Router();
var UserModel = require('../../models/userModel.js');

router.get('/test', function(req, res){

    // UserModelの内容を取得し、jsonで返却する。
    UserModel
        .find()
        .then(function (users) {
            res.json(users);
        });

    // res.json({
    //     massage: "This is user api"
    // });
});

router.get('/:id', function(req, res) {
    var Userid = req.params.id;
    UserModel
        .findById(UserId, function (err, user) {
            res.json(user);
        });
});

router.post('/', function(req, res){

    // モデルの作成
    var User = new UserModel();
    
    // リクエストから情報をインスタンスに保存
    User.name = req.body.name;
    User.screen_name = req.body.screen_name;
    User.bio = req.body.bio;

    // インスタンスの保存処理
    User.save(function(err){
        if (err) {
            res.send(err);
        } else {
            res.json({message: 'Sucsess!'});
        }
    });
});

module.exports = router;