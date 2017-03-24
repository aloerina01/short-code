import map from './map';

/**
 * 
 * @param {Symbol} containerKey 
 */
export default function(containerKey) {
    return map.get(containerKey);
}