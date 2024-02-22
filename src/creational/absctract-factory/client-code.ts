import { EnterpriseCreateCustomerVehicleFactory } from './factories/enterprise-customerVehicle-factory';
import { IndividualCreateCustomerVehicleFactory } from './factories/individual-customerVehicle-factory';

const enterpriseFactory = new EnterpriseCreateCustomerVehicleFactory();
const individualFactory = new IndividualCreateCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Opel', 'Marta');
const car2 = individualFactory.createVehicle('Mercedes AMG', 'Rudy');

car1.pickUp();
car2.pickUp();
