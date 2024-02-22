import { CarFactory } from './factories/car-factory';
import { randomVehicle } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/randomNumbers';

const carFactory = new CarFactory();

const customers = ['John', 'Miguel', 'Hannah', 'Patricia'];
for (let i = 0; i < customers.length; i++) {
  const vehicle = randomVehicle();
  const name = customers[i];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NEW CAR - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('********************************');
}
