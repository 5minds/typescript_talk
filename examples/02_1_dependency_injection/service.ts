import {DatabaseRepository} from './DatabaseRepository';

export class DataService {

  private repository: DatabaseRepository;

  constructor(repository: DatabaseRepository) {
    this.repository = repository;
  }

  public getAll() {
    this.repository.getAll();
  }

  public getOne(id: string) {
    this.repository.getOne(id);
  }

  public save(id: string, stringToSave: string) {
    this.repository.save(id, stringToSave);
  }
}
