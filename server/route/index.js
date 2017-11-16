const schema = require('../schema/index');
const controller = require('../ctrl/index');
const registModel = require('../model/index');

module.exports = (fastify, options, next) => {
  fastify.register(registModel);
  fastify.get('/list', schema.list, controller.listAction);
  fastify.get('/fetch/:id', schema.fetch, controller.fetchAction);
  fastify.post('/create', schema.create, controller.createAction);
  fastify.put('/update/:id', schema.update, controller.updateAction);
  next();
};
