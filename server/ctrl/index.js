exports.create = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const post = request.body;
  const rye = new RyeModel(post);
  const result = await rye.save();
  reply.send({ errno: 0, errmsg: 'success', data: result._id });
};

exports.fetch = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const id = request.params.id;
  const result = await RyeModel.findOne({ _id: id });
  reply
    .code(200)
    .type(result.type)
    .send(result.content);
};

exports.list = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const { page = 1, pageSize = 5, type = 'application/json' } = request.query;
  let hasNext = false;
  const list = await RyeModel.find({})
    .skip((page - 1) * pageSize)
    .limit(pageSize + 1)
    .where({ type })
    .sort({ update: -1 })
    .select('content _id struct');
  const total = await RyeModel.where({ type }).count();
  if (list.length > pageSize) {
    hasNext = true;
  }
  reply.send({ list, hasNext, total });
};

exports.update = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const id = request.params.id;
  const post = request.body;
  const result = await RyeModel.where({ _id: id })
    .update(post)
    .then(({ ok }) => ok === 1);
  if (result) {
    reply.send({ errno: 0, errmsg: 'success' });
  } else {
    reply.send({ errno: 1000, errmsg: 'faild' });
  }
};
