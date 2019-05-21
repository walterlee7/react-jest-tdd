const { identity, add, subtract, multiply, divide, mod, isGreater, isLess, isEven, isOdd, isDivisibleBy } = require('../components/numbers');

test('Number.identity', () => {
    expect(identity(2)).toStrictEqual(2);
});

// test('Number.add', () => {
//     t.is(component.add(2, 3), 5);
// });

// test('Number.subtract', () => {
//     t.is(component.subtract(2, 3), -1);
// });

// test('Number.multiply', () => {
//     t.is(component.multiply(2, 3), 6);
// });

// test('Number.divide', () => {
//     t.is(component.divide(2, 3), 2 / 3);
// });

// test('Number.mod', () => {
//     t.is(component.mod(2, 3), 2 % 3);
// });

// test('Number.isGreater', () => {
//     t.false(component.isGreater(2, 3));
//     t.true(component.isGreater(3, 2));
// });

// test('Number.isLess', () => {
//     t.true(component.isLess(2, 3));
//     t.false(component.isLess(3, 2));
// });

// test('Number.isEven', () => {
//     t.true(component.isEven(20));
//     t.false(component.isEven(23));
// });

// test('Number.isOdd', () => {
//     t.false(component.isOdd(20));
//     t.true(component.isOdd(23));
// });

// test('Number.isDivisibleBy', () => {
//     t.true(component.isDivisibleBy(20, 4));
//     t.false(component.isDivisibleBy(21, 4));
// });
