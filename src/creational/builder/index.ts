import { MealBox } from './classes/meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './classes/meals';

const rice = new Rice('Rice', 5);
const beans = new Beans('Beans', 2);
const meat = new Meat('Meat', 10.5);
// const beverage = new Beverage('Coca-Cola', 1.8);
// const dessert = new Dessert('Pudding', 6.25);

const meatBox = new MealBox();
meatBox.add(rice, beans, meat);

console.log(meatBox.getPrice());
