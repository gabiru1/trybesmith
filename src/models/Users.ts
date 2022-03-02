import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../interfaces/UsersInterface';
import connection from './connection';

const createUser = async (user: NewUser): Promise<User> => {
  const { username, classe, level, password } = user;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );

  const { insertId: id } = result;

  const newUser: User = { id, username, classe, level, password };

  return newUser;
};

export default {
  createUser,
};