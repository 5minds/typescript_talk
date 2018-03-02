export interface IRepository {
  getAll(): Array<string>;
  getOne(id: string): string;
  save(id: string, stringToSave: string): void; 
}