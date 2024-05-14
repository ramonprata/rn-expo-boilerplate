import { Device } from '@shared/utils';
import { IAppRepository } from '../types/IAppRepository';

export class AppManager {
  repository: IAppRepository;

  constructor(repo: IAppRepository) {
    this.repository = repo;
  }

  async authenticate(userEmail: string, psw: string) {
    const token = this.getToken();
    if (!token) {
      const authenticated = await this.repository.authenticate(userEmail, psw);
      return authenticated;
    }
    return token;
  }

  async getToken() {
    const token = await Device.getUserToken();

    // return token;
    return null;
  }
}
