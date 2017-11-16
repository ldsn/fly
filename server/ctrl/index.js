const { checkMIMETypes } = require('../util/index');

exports.createAction = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const post = request.body;
  if (!checkMIMETypes(post.type)) {
    reply
      .code(400)
      .type('text/plain')
      .send('Bad Request');
    return;
  }
  const rye = new RyeModel(post);
  const result = await rye.save();
  reply
    .code(201)
    .type('application/json')
    .send({ errno: 0, errmsg: 'success', data: result._id });
};

exports.fetchAction = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const id = request.params.id;
  const result = await RyeModel.findOne({ _id: id });
  if (!result) {
    reply
      .code(404)
      .type('text/plain')
      .send('NOT FOUND');
    return;
  }
  reply
    .code(200)
    .type(result.type)
    .send(result.content);
};

exports.listAction = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const { page = 1, pageSize = 5, type = 'application/json' } = request.query;
  let hasNext = false;
  const list = await RyeModel.find({})
    .skip((page - 1) * pageSize)
    .limit(pageSize + 1)
    .where({ type })
    .sort({ update: -1 })
    .select('_id content struct create update');
  if (!list.length) {
    reply.code(204).send();
    return;
  }
  const total = await RyeModel.where({ type }).count();
  if (list.length > pageSize) {
    hasNext = true;
    list.pop();
  }
  reply.send({ list, hasNext, total });
};

exports.updateAction = async (request, reply) => {
  const RyeModel = request.RyeModel;
  const id = request.params.id;
  const post = request.body;
  const result = await RyeModel.where({ _id: id })
    .update(post)
    .then(({ ok }) => ok === 1);
  if (!result) {
    reply.send({ errno: 1000, errmsg: 'faild' });
    return;
  }
  reply.code(204).send();
};
