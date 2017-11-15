const schema = require('../schema/index');
const controller = require('../ctrl/index');
const registModel = require('../model/index');

module.exports = (fastify, options, next) => {
  fastify.register(registModel);
  fastify.get('/list', schema.list, controller.list);
  fastify.get('/fetch/:id', schema.fetch, controller.fetch);
  fastify.post('/create', schema.create, controller.create);
  fastify.put('/update/:id', schema.update, controller.update);
  next();
};
