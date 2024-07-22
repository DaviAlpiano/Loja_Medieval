import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwt';

type Login = {
  status: string,
  data: object,
};

const login = async (username: string, password: string): Promise<Login> => {
  const data = await UserModel.findOne({ where: { username } });
    
  if (!data || !bcrypt.compareSync(password, data?.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const payload = {
    id: data.dataValues.id,
    username: data.dataValues.username,
  };

  const token = jwt.sign(payload);

  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  login,
};