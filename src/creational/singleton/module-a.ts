import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'John', age: 30 });
myDatabaseClassic.add({ name: 'Mariah', age: 21 });
myDatabaseClassic.add({ name: 'Edward', age: 25 });

export { myDatabaseClassic };
