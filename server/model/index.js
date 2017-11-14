const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RyeSchema = new Schema({
  type: String,
  content: String,
  struct: String,
  create: { type: Date, default: Date.now() },
  update: { type: Date, default: Date.now() }
});

exports.RyeSchema = RyeSchema;
