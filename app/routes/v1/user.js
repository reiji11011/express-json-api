var express = require('express');
var router = express.Router();
var UserModel = require('../../models/userModel.js');

// Userの一覧を取得する
router.get('/', function (req, res) {
    UserModel
        .find()
        .then(function (users) {
            res.json(users);
        });
});

// Userの詳細を取得する
router.get('/:id', function(req, res) {
    var Userid = req.params.id;
    UserModel
        .findById(Userid, function (err, user) {
            res.json(user);
        });
});

// 新規のUser情報を登録する
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