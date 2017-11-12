const schemas = require('../schema/user');
const controller = require('../ctrl/user');

module.exports = (fastify, options, next) => {
  fastify.get('/user/list', schemas.userList, controller.userList);
  next();
};
