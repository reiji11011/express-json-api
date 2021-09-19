// ライブラリの読み込み
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// body-paraserの設定
app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// port番号を指定
var port = process.env.PORT || 3000;

// /api/v1/をルートとするようにルーティングを設定
var router = require('./routes/v1/');
app.use('/api/v1/', router);

// サーバーの起動
app.listen(port);
console.log('listen on port' + port);
