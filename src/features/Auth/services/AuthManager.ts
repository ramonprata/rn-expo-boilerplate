import { Storage } from '@shared/utils';
import { IAuthRepository } from '../types/IAuthRepository';

export class AuthManager {
  repository: IAuthRepository;

  constructor(repo: IAuthRepository) {
    this.repository = repo;
  }

  async authenticate(userEmail: string, psw: string) {
    const authenticatedToken = await this.repository.authenticate(userEmail, psw);
    await this.saveUserToken(authenticatedToken);
    return authenticatedToken;
  }

  async getUserToken() {
    const token = await Storage.getUserToken();
    // return token;
    return null;
  }

  async saveUserToken(token: string) {
    await Storage.saveUserToken(token);
  }
}
