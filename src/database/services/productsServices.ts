import ProductModel,
{ ProductSequelizeModel, ProductInputtableTypes } from '../models/product.model';

type ServiceResponse = {
  status: string,
  data: ProductSequelizeModel
};

const postProduct = async (product:ProductInputtableTypes): Promise<ServiceResponse> => {
  const { name, price, userId } = product;
  const data = await ProductModel.create({ name, price, userId });
  return { status: 'CREATED', data };
};

export default {
  postProduct,
};