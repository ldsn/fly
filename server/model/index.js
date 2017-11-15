const fp = require('fastify-plugin');
const ryeSchema = require('./rye');
// .. other schema

function registModel(fastify, options, next) {
  const RyeModel = fastify.mongo.db.model('rye', ryeSchema);
  fastify.decorateRequest('RyeModel', RyeModel);
  // ... other Model
  next();
}

module.exports = fp(registModel);
