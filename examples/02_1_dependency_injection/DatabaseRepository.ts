export class DatabaseRepository {

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
