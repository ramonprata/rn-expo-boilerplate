import { DemoRepository } from './DemoRepository';
import { DemoManager } from './DemoManager';

const repo = new DemoRepository();

export default new DemoManager(repo);
