import { IRepository } from "./interfaces";


export class DataService {

  private repository: IRepository;

  constructor(repository: IRepository) {
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
