import { NextFunction, Request, Response } from 'express';
import Schema from './Joi/schemas';
import joiStatusHTTP from './Joi/JoiStatusHTTP';

const validateLogin = (req: Request, res:Response, next: NextFunction) => {
  const login = req.body;
  const { error } = Schema.loginSchema.validate(login);
  if (error) {
    return res.status(joiStatusHTTP(error.details[0].type))
      .send({ message: error.details[0].message });
  }
  next();
};

export default validateLogin;