import { Login } from '../interfaces/LoginInterface';
import Logins from '../models/Logins';

const checkLogin = async (data: Login) => {
  const { username, password } = data;
  const verifiedCredentials = await Logins.checkLogin({ username, password });
  
  return verifiedCredentials;
};

export default {
  checkLogin,
};