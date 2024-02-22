import { BicycleFactory } from '../factories/bicycle';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/randomNumbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomVehicle(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Opel');
  const car2 = carFactory.getVehicle('Mercedes AMG');
  const bike = bicycleFactory.getVehicle('Bike1');
  const vehicles = [car1, car2, bike];
  return vehicles[randomNumbers(vehicles.length)];
}
