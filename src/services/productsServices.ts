import ProductModel,
{ ProductSequelizeModel, ProductInputtableTypes } from '../database/models/product.model';
import UserModel from '../database/models/user.model';

type ServiceOk = {
  status: string,
  data: ProductSequelizeModel
};

type ServiceResponses = {
  status: string,
  data: ProductSequelizeModel[]
};

type ServiceErro = {
  status: string,
  data: {
    message: string,
    dataValues?: ProductSequelizeModel[]
  }
};

type ServiceResponse = ServiceOk | ServiceErro;

const postProduct = async (product:ProductInputtableTypes): Promise<ServiceResponse> => {
  const { name, price, userId } = product;
  const user = await UserModel.findByPk(userId);
  if (!user) return { status: 'INVALID_VALUE', data: { message: '"userId" not found' } };
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