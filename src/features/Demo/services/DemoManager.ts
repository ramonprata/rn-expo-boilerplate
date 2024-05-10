import { TErrorInfo } from '@/src/shared/types';
import { IJokeDto } from '../types/IJokeDto';
import { IDemoRepository } from '../types/IRepository';
import { SERVER_ERROR_DICTIONARY } from '../utils';

export class DemoManager {
  repository: IDemoRepository;

  constructor(repo: IDemoRepository) {
    this.repository = repo;
  }

  async getRandomJoke() {
    try {
      const response = await this.repository.fetchRandomJoke();

      const data = (await response.json()) as IJokeDto;
      if (!data) {
        this.handleError(SERVER_ERROR_DICTIONARY.empty);
      }
      return data;
    } catch (error) {
      this.handleError(SERVER_ERROR_DICTIONARY.unknown);
    }
  }

  handleError(error: TErrorInfo) {
    throw error;
  }
}
