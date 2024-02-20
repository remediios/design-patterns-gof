import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Robert', age: 30 });
myDatabaseClassic.add({ name: 'Jane', age: 21 });
myDatabaseClassic.add({ name: 'Louise', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
