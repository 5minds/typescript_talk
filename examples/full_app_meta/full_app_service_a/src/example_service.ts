import {IExampleService} from 'full_app_service_contracts';


export class ExampleServiceA implements IExampleService {
  
  public doSomething(something: string): void {
    console.log(`ExampleService AAAAA says: ${something}`);
  }
  
}

console.log('ExampleService AAAAA has been loaded just now ;)');
