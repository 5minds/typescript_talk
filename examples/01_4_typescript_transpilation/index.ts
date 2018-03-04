
export class MyBasicClass {

  public async doSomething(anything: string): Promise<void> {

    // Diese Überprüfungen brauchen wir zur Design Time nicht mehr

    // if (!anything) {
    //   throw new Error('give me something');
    // }

    // if (typeof anything !== 'string') {
    //   throw new Error('give me something else');
    // }

    console.log(`did something: ${anything}`);
  }

}


const myClass = new MyBasicClass();

myClass.doSomething('say hello');
