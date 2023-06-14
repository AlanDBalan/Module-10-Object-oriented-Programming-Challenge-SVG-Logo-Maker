// Shape.test.js
const Shape = require('../lib/Shape');

test('sets the color correctly', () => {
  const shape = new Shape();
  shape.setColor('red');
  expect(shape.color).toEqual('red');
});
