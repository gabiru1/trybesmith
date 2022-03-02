import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Logins from '../services/Logins';

const SECRET = process.env.JWT_SECRET || 'kauandabahia';

const checkLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await Logins.checkLogin({ username, password });

  if (!user) {
    const message = { error: 'Username or password invalid' };
    return res.status(401).json(message);
  }

  const { id } = user;

  const token = jwt.sign({ id, username }, SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  
  res.status(200).json({ token });
};

export default checkLogin;