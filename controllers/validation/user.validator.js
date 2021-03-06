const Joi = require('joi');

exports.userValidator = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  replace: Joi.string().required(),
  past: Joi.string().required()
});
