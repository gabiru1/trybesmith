import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { NewUser } from '../interfaces/UsersInterface';
import Users from '../models/Users';

dotenv.config();

const SECRET: string = process.env.JWT_SECRET || 'kauandabahia';

interface TOKEN {
  token: string;
}

const createUser = async (user: NewUser): Promise<TOKEN> => {
  await Users.createUser(user);

  const token = jwt.sign({ user }, SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  
  return { token };
};

export default {
  createUser,
};