const map = require('./map');

/**
 * 
 * @param {Symbol} containerKey 
 * @param {Array.<Object>} dependencies 
 */
module.exports = function(containerKey, dependencies) {
    return map.put(containerKey, dependencies);
}