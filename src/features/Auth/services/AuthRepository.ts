import { IAuthRepository } from '../types/IAuthRepository';

export class AuthRepository implements IAuthRepository {
  async authenticate(userEmail: string, psw: string) {
    return Promise.resolve('some-token');
  }
}
