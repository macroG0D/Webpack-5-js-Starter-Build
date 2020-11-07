import '@styles/main.scss';
import Model from '@models/Model';

const x = 5;
const y = 2;

const model = new Model('Test title');

model.testString();
console.log(model.testNumbers(x, y));
console.log(model.testNumbers(3, 10));
