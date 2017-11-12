exports.userList = async (request, reply) => {
  request.log.info();
  reply.send({ hello: 'world' });
};
