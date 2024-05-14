export interface IAuthRepository {
  authenticate: (userEmail: string, psw: string) => Promise<string>;
}
