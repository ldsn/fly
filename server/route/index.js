const schema = require('../schema/index');
const controller = require('../ctrl/index');
const { RyeSchema } = require('../model/index');

module.exports = (fastify, options, next) => {
  const RyeModel = fastify.mongo.db.model('RyeModel', RyeSchema);
  fastify.decorateRequest('RyeModel', RyeModel);

  fastify.post('/create', schema.create, controller.create);
  // fastify.put('/update/:id');
  // fastify.get('/fetch/:id');
  // fastify.get('/list');
  next();
};
