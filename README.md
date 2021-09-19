# 概要
ExpressでjsonAPIサーバーを作成する。

# 目的
- APIサーバーの概要をコードを書きながら学ぶ。

# 環境構築
```
$ npm install

// MongoDBの用意
$ brew tap mongodb/brew
$ brew install mongodb-community
$ mongod --version

// DBの起動
$ sudo mongod --dbpath /var/db/mongo/
```

# 進捗
- mongodbの導入にで「sudo: mongod: command not found」エラーが発生。
- そもそもmongodbがわかっていないので、mongodbに関してリサーチを行う。
- GET /api/v1/user/まで完成した。

# 参考
[サルでも分かるExpressでのjsonAPIサーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)