var crypto = require('crypto-js');

var secretMsg = {
    name: 'jothy',
    secretName: '007'
};
var secretKey = '123xyz';

var encrptMsg = crypto.AES.encrypt(JSON.stringify(secretMsg), secretKey);
console.log("Encrypted msg "+encrptMsg);

var bytes = crypto.AES.decrypt(encrptMsg, secretKey);
var decryptMsg = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptMsg);
console.log("Decrypted Msg name "+ decryptMsg.secretName);

