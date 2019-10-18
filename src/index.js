const log = require ('@ajar/marker');

var myFunction = function(...items) {
    return items.join('-');
};
module.exports = myFunction;

log.yellow(myFunction('hello', 'worls'));