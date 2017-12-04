var args = require('yargs').argv;

var cmd = args._[0];

console.log(args);

if(cmd == 'hello' && typeof args.name != undefined)
{
    console.log("hello "+ args.name);
}
else if(cmd == "hello")
{
    console.log("hello world");
}
