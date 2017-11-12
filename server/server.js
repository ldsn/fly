'use strict';
const log = require('pino')({ level: 'info' });
const fastify = require('fastify')({ logger: log });

fastify.register(require('./route/user'), { prefix: '/api' });

// set the 404 handler
function notFoundHandler(request, reply) {
  reply.send('NOT FOUND');
}
fastify.setNotFoundHandler(notFoundHandler);

// will be called whenever an error happens, different set different error handlers
function setErrorHandler(request, reply) {
  reply.send('error happend');
}
fastify.setErrorHandler(setErrorHandler);

fastify.ready(err => {
  if (err) throw err;
  // log routes when ready
  // for (let route of fastify) {
  // console.log(route);
  // }
});

fastify.listen(3000, err => {
  if (err) throw err;
  // eslint-disable-next-line
  console.log(`server listening on ${fastify.server.address().port}`);
});
