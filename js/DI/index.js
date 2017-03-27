const inject = require('./inject');
const container = require('./container');
const register = require('./register');
const init = require('./utils/read')();

export default { inject, container, register };