export interface IAppRepository {
  authenticate: (userEmail: string, psw: string) => Promise<string>;
}
