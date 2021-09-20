# 概要
ExpressでjsonAPIサーバーを作成する。

# 目的
- APIサーバーの概要をコードを書きながら学ぶ。

# 環境構築
```
$ npm install

// MongoDBの用意
$ brew tap mongodb/brew
$ brew install mongodb-community@5.0
$ brew services start mongodb-community@5.0
$ brew services stop mongodb-community@5.0
// 起動しているかの確認
$ brew services list

// MongoDBの詳細
設定ファイル：/usr/local/etc/mongod.conf
log：/usr/local/var/log/mongodb
データ：/usr/local/var/mongodb

// MacにHomebrewでインストール（こちら側の構築手順を消す）
// TODO: 下記で作成したpathやディレクトリは必要ないので削除する。
$ brew install mongodb
// データ格納用ディレクトリの作成（下記コマンドのどちらか）
$ sudo mkdir -p /data/db/mongodb
$ sudo mkdir -p /Users/{$PWD}/data/db/mongodb
// 所有者の変更
$ sudo chown `whoami` /Users/{$PWD}/data/db/mongodb
// DBの初期化（&起動）
$ mongod --dbpath /Users/{$PWD}/data/db/mongodb

// サーバーを動かす
$ mongod
$ node app/app.js

// APIを叩く
http://localhost:3000/api/v1/
http://localhost:3000/api/v1/user/
```

## Macでのディレクトリ作成に関して
MacのCatalinaからルートディレクトリに書き込みができなくなったので、/Users/~にデータ格納ディレクトリを作成します。

# 進捗
- POST /api/vi/user/にてname~などが保存されていない。
    - mongoDBに入り、db.usermodels.find();でUserのnameなどが保存されていないことを確認。
    - VSCodeにデバッカを導入したがPOSTの内容をどのようにテストすればいいかわからないので調べる。

# 参考
[サルでも分かるExpressでのjsonAPIサーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)

発展させていく上で参考にしたい  
[Node.jsとExpressでローカルサーバーを構築する(1) ―Node.jsとnpmの導入―](https://qiita.com/koedamon/items/37ea8e9175cf0fd62371)  
[KubernetesとNode.jsでマイクロサービスを作成する 1/6 概要](https://qiita.com/reireias/items/6a78d6b8df781a76f94f)  
