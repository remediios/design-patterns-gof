import { Customer } from '../customer/customer-interface';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { Vehicle } from '../vehicle/vehicle-interface';
import { CreateCustomerVehicleFactory } from './customerVehicle-factory-interface';

export class EnterpriseCreateCustomerVehicleFactory
  implements CreateCustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
