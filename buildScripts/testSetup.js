require('babel-register')();

// disable webpack css importing thingy because Mocha doesn't understand it
require.extensions['.css'] = function() {};
