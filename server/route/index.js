const schemas = require('../schema/index');
const controller = require('../ctrl/index');

module.exports = (fastify, options, next) => {
  fastify.get('/test', schemas.userList, controller.userList);
  next();
};
