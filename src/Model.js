export default class Model {
  constructor(title) {
    this.title = title;
  }

  testString() {
    console.log(this.title);
  }

  testNumbers(x, y) {
    z = x + y;
    return z;
  }
}
