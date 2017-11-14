const t = require('tap');
const test = t.test;
const request = require('request');
const server = require('../server');

server.start({ port: 0 }, (err, fastify) => {
  t.error(err);

  test('The server should start', t => {
    t.plan(4);
    request(
      {
        method: 'GET',
        uri: `http://localhost:${fastify.server.address().port}/api/test`,
      },
      (err, response, body) => {
        t.error(err);
        t.strictEqual(response.statusCode, 200);
        t.strictEqual(response.headers['content-length'], '' + body.length);
        t.deepEqual(JSON.parse(body), { hello: 'world' });
        fastify.close();
      },
    );
  });
});
