// This file isn't trabspiled, so must use commonjs and es5
// Register babel to transpile before our teats run
require('babel-register')(),

// Disable webpack features that Mocha doesn't understand
require.extensions['css'] = function() {};
