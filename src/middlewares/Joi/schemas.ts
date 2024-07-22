import Joi from "@hapi/joi";

type Schemas = {
  loginSchema: Joi.ObjectSchema;
}
const someRequired = '"username" and "password" are required';

const loginSchema = Joi.object({
  username: Joi.string().required().empty('')
    .messages({
      'any.required': someRequired,
      'string.empty': someRequired,
    }),
  password: Joi.string().required().empty('')
    .messages({
      'any.required': someRequired,
      'string.empty': someRequired,
    }),
});

const schemas: Schemas = {
  loginSchema
};

export default schemas;