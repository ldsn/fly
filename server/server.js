'use strict';
const log = require('pino')({ level: 'info' });
const minimist = require('minimist');
const helmet = require('fastify-helmet');
const mongodb = require('fastify-mongodb');
const fastify = require('fastify')({ logger: log });

// register plugin
fastify.register(helmet);
// fastify.register(mongodb, {
//   url: 'mongodb://mongo/db',
// })
fastify.register(require('./route/index'), { prefix: '/api' });

// hooks
// fastify.addHook('onRequest', async (req, res) => {});
// fastify.addHook('preHandler', async (request, reply) => {});
// fastify.addHook('onSend', async (request, reply, payload) => {});
// fastify.addHook('onResponse', async res => {});

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

// function called when all the plugins has been loaded. It takes an error parameter if somthing went wrong
fastify.ready(err => {
  if (err) throw err;
});

function start(opts, callback) {
  fastify.listen(opts.port, function(err) {
    callback(err, fastify);
  });
}

// in this way you can run the server both from the cli and as a requrie module.
if (require.main === module) {
  // run the server with: $ node server.js -p 8080
  start(
    minimist(process.argv.slice(2), {
      integer: ['port'],
      alias: {
        port: 'p',
      },
      default: {
        port: 3000,
      },
    }),
    (err, instance) => {
      if (err) throw err;
      console.log(`server listening on ${instance.server.address().port}`);
    },
  );
}

module.exports = { start, fastify };
