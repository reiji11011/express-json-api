// ライブラリの読み込み
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI');
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

// body-paraserの設定
app.unsubscribe(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// port番号を指定
var port = process.env.PORT || 3000;

// /api/v1/をルートとするようにルーティングを設定
var router = require('./routes/v1/');
const { MongoServerClosedError } = require('mongoose/node_modules/mongodb');
app.use('/api/v1/', router);

// サーバーの起動
app.listen(port);
console.log('listen on port' + port);
