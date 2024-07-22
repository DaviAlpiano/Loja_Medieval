import Joi from '@hapi/joi';

type Schemas = {
  loginSchema: Joi.ObjectSchema;
  productSchema: Joi.ObjectSchema;
};
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

const productSchema = Joi.object({
  name: Joi.string().required().empty('').min(3)
    .messages({
      'string.base': '"name" must be a string',
      'any.required': '"name" is required',
      'string.empty': '"name" is required',
      'string.min': '"name" length must be at least 3 characters long',
    }),
  price: Joi.string().required().empty('').min(3)
    .messages({
      'string.base': '"price" must be a string',
      'any.required': '"price" is required',
      'string.empty': '"price" is required',
      'string.min': '"price" length must be at least 3 characters long',
    }),
  userId: Joi.number().required().empty('').strict()
    .messages({
      'number.base': '"userId" must be a number',
      'number.empty': '"userId" is required',
      'any.required': '"userId" is required',
      'number.strict': '"userId" must be a number',
    }),
});

const schemas: Schemas = {
  loginSchema,
  productSchema,
};

export default schemas;