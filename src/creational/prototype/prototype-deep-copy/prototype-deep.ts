export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number
  ) {}

  clone(): Person {
    const newObject = new Person(this.name, this.age);
    newObject.addresses = this.addresses.map((address) => address.clone());
    return newObject;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number
  ) {}
  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Street Banana', 1);
const person1 = new Person('Miguel', 22);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Random Street';

person2.name = 'Joana';
console.log(person1, '\n');
console.log(person2);
