export interface IMotor {
  run(treibstoff: Treibstoff);
  stop();
}

export type Treibstoff = string;

export const Diesel = 'Diesel';
export const Benzin = 'Benzin';





export class Motor {
  public isRunning: boolean = false;

  public stop(): void {
    this.isRunning = false;
  }
}

export class DieselMotor extends Motor implements IMotor {
  public run(treibstoff: Treibstoff): void {
    if (treibstoff !== 'Diesel') {
      throw new Error('burbpbrhrrhrhrgrgrgr');
    }
    this.isRunning = true;
  }
}

export class BenzinMotor extends Motor implements IMotor {

  public run(treibstoff: Treibstoff): void {
    if (treibstoff !== 'Benzin') {
      throw new Error('BOOOOOM');
    }
    this.isRunning = true;
  }

}

export class Auto {

  private tank: Treibstoff;
  private motor: IMotor;

  constructor(motor: IMotor) {
    this.motor = motor;
  }

  public tanken(treibstoff: Treibstoff): void {
    this.tank = treibstoff;
  }

  public start(): void {
    this.motor.run(this.tank);
  }

  public stop(): void {
    this.motor.stop();
  }
}




const myAuto = new Auto(new DieselMotor());
myAuto.tanken(Benzin);
myAuto.start();