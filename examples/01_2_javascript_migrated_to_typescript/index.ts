
export class MyBasicClass {
  
  public doSomething(anything: any): void {

    if (!anything) {
      throw new Error('give me something');
    }

    if (typeof anything !== 'string') {
      throw new Error('give me something else');
    }

    console.log(`did something: ${anything}`);
  }

}


const myClass = new MyBasicClass();

myClass.doSomething({});