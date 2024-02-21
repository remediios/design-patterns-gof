export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number
  ) {}

  clone(): this {
    const newObject = Object.create(this);
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
  clone(): Prototype {
    throw new Error('Method not implemented.');
  }
}

const address1 = new Address('Street Banana', 1);
const person1 = new Person('Miguel', 22);
person1.addAddress(address1);
const person2 = person1.clone();

console.log(person1);
person1.addresses[0].street = 'Random Street';
person2.name = 'Joana';
console.log(person2);
console.log(person2.addresses);
