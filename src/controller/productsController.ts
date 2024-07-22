import { Request, Response } from 'express';
import productsServices from '../services/productsServices';
import mapStatusHTTP, { HttpStatus } from '../utils/mapStatusHTTP';

const postProduct = async (req: Request, res: Response): Promise<void> => {
  const product = req.body;
  const { status, data } = await productsServices.postProduct(product);
  res.status(mapStatusHTTP(status as HttpStatus)).json(data);
};

const getProducts = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await productsServices.getProducts();
  res.status(mapStatusHTTP(status as HttpStatus)).json(data);
};

export default {
  postProduct,
  getProducts,
};