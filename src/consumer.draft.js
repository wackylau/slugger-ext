const log = require ('@ajar/marker');
const myFynction = require ('./index');

log.red('result');
var result = myFynction('I', 'am', 'a', 'test');

log.red(result);
