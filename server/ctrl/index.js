exports.create = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const rye = await RyeModel.create({
    type: 'test',
    content: 'test',
    struct: 'test'
  });
  reply.send({ errno: 0, errmsg: 'success', data: rye._id });
};
