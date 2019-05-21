const { identity, add, subtract, multiply, divide, mod, isGreater, isLess, isEven, isOdd, isDivisibleBy } = require('../components/numbers');

test('Number.identity', () => {
    expect(identity(2)).toStrictEqual(2);
});

test('Number.add', () => {
    expect(add(2, 3)).toBe(5);
});

test('Number.subtract', () => {
    expect(subtract(2, 3)).toBe(-1);
});

test('Number.multiply', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('Number.divide', () => {
    expect(divide(2, 3)).toBe(2 / 3);
});

test('Number.mod', () => {
    expect(mod(2, 3)).toBe(2 % 3);
});

test('Number.isGreater', () => {
    expect(isGreater(2, 3)).toBe(false);
    expect(isGreater(3, 2)).toBe(true);
});

test('Number.isLess', () => {
    expect(isLess(2, 3)).toBe(true);
    expect(isLess(3, 2)).toBe(false);
});

test('Number.isEven', () => {
    expect(isEven(20)).toBe(true);
    expect(isEven(23)).toBe(false);
});

test('Number.isOdd', () => {
    expect(isOdd(20)).toBe(false);
    expect(isOdd(23)).toBe(true);
});

test('Number.isDivisibleBy', () => {
    expect(isDivisibleBy(20, 4)).toBe(true);
    expect(isDivisibleBy(21, 4)).toBe(false);
});
