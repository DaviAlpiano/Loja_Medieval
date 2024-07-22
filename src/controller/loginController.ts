import { Request, Response } from 'express';
import loginServices from '../services/loginServices';
import mapStatusHTTP, { HttpStatus } from '../utils/mapStatusHTTP';

const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const { status, data } = await loginServices.login(username, password);
  res.status(mapStatusHTTP(status as HttpStatus)).json(data);
};

export default {
  login,
};