const map = require('./map');

/**
 * 
 * @param {Symbol} containerKey 
 */
module.exports = function(containerKey) {
    return map.get(containerKey);
}