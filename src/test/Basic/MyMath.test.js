//const { default: MyMath } = require('./MyMath');
import MyMath from './MyMath';

test('2+2=4', () => {
  let result = MyMath.add(2, 2);
  expect(result).toBe(4);
});

test('0.1+0.2=0.3', () => {
  let result = MyMath.add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test('2-2=0', () => {
  let result = MyMath.subtract(2, 2);
  expect(result).toBe(0);
});
