
export class MyBasicClass {

  doSomething(anything) {

    if (!anything) {
      throw new Error('give me something');
    }

    if (typeof anything !== 'string') {
      throw new Error('give me something else');
    }
    
    console.log(`did something: ${anything}`);
  }
  
}