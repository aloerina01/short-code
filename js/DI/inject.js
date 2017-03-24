import map from './map';

/**
 * 
 * @param {Symbol} containerKey 
 * @param {Array.<Object>} dependencies 
 */
export default function(containerKey, dependencies) {
    return map.put(containerKey, dependencies);
}