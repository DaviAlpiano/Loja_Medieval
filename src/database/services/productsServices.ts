import ProductModel,
{ ProductSequelizeModel, ProductInputtableTypes } from '../models/product.model';

type ServiceResponse = {
  status: string,
  data: ProductSequelizeModel
};

type ServiceResponses = {
  status: string,
  data: ProductSequelizeModel[]
};

const postProduct = async (product:ProductInputtableTypes): Promise<ServiceResponse> => {
  const { name, price, userId } = product;
  const data = await ProductModel.create({ name, price, userId });
  return { status: 'CREATED', data };
};

const getProducts = async (): Promise<ServiceResponses> => {
  const data = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data };
};

export default {
  postProduct,
  getProducts,
};