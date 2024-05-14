import { AppRepository } from './AppRepository';
import { AppManager } from './AppManager';

const repo = new AppRepository();
export default new AppManager(repo);
