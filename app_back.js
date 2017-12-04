console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();//initialise the synching process; 

storage.setItemSync('accounts', [{
    username: 'Jothy',
    balance: 1000
}]);

var data = storage.getItemSync('accounts');
console.log(data);
