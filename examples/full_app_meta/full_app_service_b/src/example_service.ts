import {IExampleService} from 'full_app_service_contracts';


export class ExampleServiceB implements IExampleService {
  
  public doSomething(something: string): void {
    console.log(`ExampleService BBBBB says: ${something}`);
  }
  
}

console.log('ExampleService BBBBB has been loaded just now ;)');
