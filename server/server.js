'use strict';
const log = require('pino')({ level: 'error' });
const minimist = require('minimist');
const fastify = require('fastify')({ logger: log });
const config = require('./config/index');

// register plugin
fastify.register(require('fastify-helmet'));
fastify.register(
  require('fastify-mongoose'),
  {
    uri: config.mongodb
  },
  err => {
    if (err) throw err;
  }
);
fastify.register(require('./route/index'), { prefix: '/api' });

// set the 404 handler
function notFoundHandler(request, reply) {
  reply.send('NOT FOUND');
}
fastify.setNotFoundHandler(notFoundHandler);
// will be called whenever an error happens, different set different error handlers
function setErrorHandler(err, reply) {
  const detail = JSON.parse(err.message);
  if (Array.isArray(detail)) {
    reply.send({ errno: 1001, errmsg: detail[0].message });
  } else {
    reply.send({ errno: 1001, errmsg: '未知错误' });
  }
}
fastify.setErrorHandler(setErrorHandler);

// function called when all the plugins has been loaded.
// It takes an error parameter if somthing went wrong
fastify.ready(err => {
  if (err) throw err;
});

function start(opts, callback) {
  fastify.listen(opts.port, function(err) {
    callback(err, fastify);
  });
}

// in this way you can run the server both from the cli and as a requrie module.
// run the server with: $ node server.js -p 8080
if (require.main === module) {
  start(
    minimist(process.argv.slice(2), {
      integer: ['port'],
      alias: {
        port: 'p'
      },
      default: {
        port: 3000
      }
    }),
    (err, instance) => {
      if (err) throw err;
      // eslint-disable-next-line
      console.log(`server listening on ${instance.server.address().port}`);
    }
  );
}

module.exports = { start, fastify };
