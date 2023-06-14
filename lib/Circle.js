// Circle.js
const Shape = require('./Shape');

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
  }
}

module.exports = Circle;