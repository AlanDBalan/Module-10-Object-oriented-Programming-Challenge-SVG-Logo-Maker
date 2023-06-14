// Circle.test.js
const Circle = require('../lib/Circle');

test('renders a circle with the given color', () => {
  const shape = new Circle();
  shape.setColor('green');
  expect(shape.render()).toEqual('<circle cx="100" cy="100" r="50" fill="green" />');
});