import { IRepository } from 'dependency_injection_contracts';

export class FileSystemrepository implements IRepository {

  getAll(): Array<string> {
    console.log('FileSystemRepository getAll() called');
    return [];
  }

  getOne(id: string): string {
    console.log('FileSystemRepository getOne() called');
    return '';
  }

  save(id: string, stringToSave: string): void {
    console.log('FileSystemRepository save() called');
  }
} 