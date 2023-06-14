// Square.test.js
const Square = require('../lib/Square');

test('renders a square with the given color', () => {
  const shape = new Square();
  shape.setColor('yellow');
  expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="yellow" />');
});