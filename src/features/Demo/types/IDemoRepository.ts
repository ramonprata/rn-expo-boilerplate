import { IJokeDto } from './IJokeDto';

export interface IDemoRepository {
  fetchRandomJoke: () => Promise<Response>;
}
