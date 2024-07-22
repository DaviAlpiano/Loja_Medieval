import { Request, Response } from 'express';
import userServices from '../services/userServices';
import mapStatusHTTP, { HttpStatus } from '../utils/mapStatusHTTP';

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await userServices.getUsers();
  res.status(mapStatusHTTP(status as HttpStatus)).json(data);
};

export default {
  getUsers,
};
