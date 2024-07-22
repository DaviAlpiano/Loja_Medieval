import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import ProductModel from '../database/models/product.model';

type ServiceResponses = {
  status: string,
  data: UserSequelizeModel[]
};

export type ProductId = {
  id: number;
};

export type User = {
  username: string;
  productIds: ProductId[];
};

const getUsers = async (): Promise<ServiceResponses> => {
  const response = await UserModel.findAll({
    attributes: ['username'],
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }] });
  const responseJSON = JSON.stringify(response);
  const back = JSON.parse(responseJSON);
  const data = back.map((item: User) => ({
    username: item.username,
    productIds: item.productIds.map((id: ProductId) => id.id),
  }));
  return { status: 'SUCCESSFUL', data };
};

export default {
  getUsers,
};