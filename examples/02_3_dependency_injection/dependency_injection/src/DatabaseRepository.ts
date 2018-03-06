import { IRepository } from 'dependency_injection_contracts';

export class DatabaseRepository implements IRepository {

  getAll(): Array<string> {
    console.log('DatabaseRepository getAll() called');
    return [];
  }

  getOne(id: string): string {
    console.log('DatabaseRepository getOne() called');
    return '';
  }

  save(id: string, stringToSave: string): void {
    console.log('DatabaseRepository save() called');
  }
} 