import { NextFunction, Request, Response } from 'express';
import Schema from './Joi/schemas';
import joiStatusHTTP from './Joi/JoiStatusHTTP';

const validateProduct = (req: Request, res:Response, next: NextFunction) => {
  const product = req.body;
  const { error } = Schema.productSchema.validate(product);
  if (error) {
    return res.status(joiStatusHTTP(error.details[0].type))
      .send({ message: error.details[0].message });
  }
  next();
};

export default validateProduct;