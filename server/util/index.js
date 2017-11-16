const _ = require('ramda');
const { allowMIMETypes } = require('../config/index');

exports.checkMIMETypes = type => _.contains(type, allowMIMETypes);
