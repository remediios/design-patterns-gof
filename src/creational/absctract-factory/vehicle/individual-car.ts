import { Customer } from '../customer/customer-interface';
import { Vehicle } from './vehicle-interface';

export class IndividualCar implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: Customer
  ) {}
  pickUp(): void {
    console.log(
      `(INDIVIDUAL) ${this.name} is picking up ${this.customer.name}`
    );
  }
}
