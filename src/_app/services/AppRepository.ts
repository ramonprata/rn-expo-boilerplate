import { Device } from '@shared/utils';
import { IAppRepository } from '../types/IAppRepository';

export class AppRepository implements IAppRepository {
  async authenticate(userEmail: string, psw: string) {
    return Promise.resolve('some-token');
  }
}
