import connection from './connection';
import { NewLogin, Login } from '../interfaces/LoginInterface';

const checkLogin = async ({ username, password }: Login): Promise<NewLogin> => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  const [login] = result as NewLogin[];

  console.log(result); // para mostrar o motivo da desestruturação de array

  return login;
};

export default {
  checkLogin,
};