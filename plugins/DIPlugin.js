// var DI = require('../js/DI/index');
import DI from '../js/DI/index';

function DIPlugin(options) {
    
}

DIPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        DI.test();
        console.log('Done Dependency Injection!!');
    });
}

module.exports = DIPlugin;