export interface NewUser {
  classe: string,
  level: number,
  username: string,
  password: string,
}
  
export interface User extends NewUser {
  id: number
}