import { AuthRepository } from './AuthRepository';
import { AuthManager } from './AuthManager';

const repo = new AuthRepository();
export default new AuthManager(repo);
