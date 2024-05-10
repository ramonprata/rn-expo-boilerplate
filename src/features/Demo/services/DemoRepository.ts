import { IDemoRepository } from '../types/IRepository';

export class DemoRepository implements IDemoRepository {
  constructor() {}
  fetchRandomJoke() {
    return fetch('https://v2.jokeapi.dev/joke/Any?lang=en&category=programming');
  }
}
