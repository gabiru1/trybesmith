import { Request, Response } from 'express';
import { User } from '../interfaces/UsersInterface';
import Users from '../services/Users';

interface TOKEN {
  token: string;
}

const createUser = async (req: Request, res: Response<TOKEN>) => {
  const { username, classe, level, password } = req.body as User;

  const user = await Users.createUser({ username, classe, level, password });

  res.status(201).send(user);
};

export default {
  createUser,
};