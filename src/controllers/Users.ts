import { Request, Response } from 'express';
import { User } from '../interfaces/UsersInterface';
import Users from '../services/Users';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body as User;

  const user = await Users.createUser({ username, classe, level, password });

  res.status(201).send(user);
};

export default {
  createUser,
};