var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name :String,
    screen_name: String,
    bio: String
});

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('UserModel', UserSchema);