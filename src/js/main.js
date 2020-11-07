import '../styles/main.scss';
import Model from './Model';

const x = 1;
const y = 2;

const model = new Model('Test title');

model.testString();
console.log(model.testNumbers(x, y));
console.log(model.testNumbers(5, 10));
