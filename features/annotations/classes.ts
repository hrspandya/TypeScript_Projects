class Vehicle {
  public color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

class Car extends Vehicle {
  public wheels: number;

  constructor(color: string, wheels: number) {
    super(color);
    this.wheels = wheels;
  }

  private drive(): void {
    console.log('wroom...');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('red', 4);
car.startDrivingProcess();
