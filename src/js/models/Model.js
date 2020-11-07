export default class Model {
  constructor(title) {
    this.title = title;
  }

  testString(x, y) {
    let result = x + y;
    result = 4;
    return this.title + result.toString();
  }
}
