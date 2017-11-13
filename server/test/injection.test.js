const t = require('tap');
const test = t.test;
const request = require('request');
const fastify = require('../server').fastify;

test('GET `/api/user/list` route', t => {
  t.plan(3);
  fastify.inject(
    {
      method: 'GET',
      url: '/api/user/list',
    },
    res => {
      t.strictEqual(res.statusCode, 200);
      t.strictEqual(res.headers['content-length'], res.payload.length);
      t.deepEqual(JSON.parse(res.payload), { hello: 'world' });
      // even if the server is not running (inject does not run the server)
      // at the end of your tests is highly recommended call `.close()`,
      // in this way you will close all the connections to external services
      fastify.close();
    },
  );
});
