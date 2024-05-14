import { TErrorInfo } from '@/src/shared/types';
import { IJokeDto } from '../types/IJokeDto';
import { IDemoRepository } from '../types/IDemoRepository';
import { SERVER_ERROR_DICTIONARY } from '../utils';
import { DemoRepository } from './DemoRepository';

export class DemoManager {
  public repository: IDemoRepository;

  constructor(repo?: IDemoRepository) {
    this.repository = repo || new DemoRepository();
  }

  public async getRandomJoke() {
    try {
      const response = await this.repository.fetchRandomJoke();

      const data = (await response.json()) as IJokeDto;
      if (!data) {
        this.handleError(SERVER_ERROR_DICTIONARY.empty);
      }
      return data;
    } catch (error) {
      console.log('object:>>: ', error);
      this.handleError(SERVER_ERROR_DICTIONARY.unknown);
    }
  }

  public handleError(error: TErrorInfo) {
    throw error;
  }
}

export default new DemoManager();
