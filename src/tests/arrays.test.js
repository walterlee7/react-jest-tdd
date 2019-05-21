const { identity, value, length, sum, square, add, contains, combine, reverse, sort, union, intersect, difference, defined, remove, flatten, findMissingNumber } = require('../components/arrays');

test('Array.identity', () => {
    let arr = [0, 1, 2];
    expect(identity(arr)).toBe(arr);
});

test('Array.value', () => {
    expect(value(2, [0, 1, 2])).toBe(2);
});

test('Array.length', () => {
    expect(length([0, 1, -1])).toBe(3);
});

test('Array.sum', () => {
    expect(sum([0, 1, -1])).toBe(0);
    expect(sum([0, 1, 2])).toBe(3);
});

test('Array.square', () => {
    expect(square([0, 1, -1])).toStrictEqual([0, 1, 1]);
    expect(square([2, 3, 4])).toStrictEqual([4, 9, 16]);
});

test('Array.add', () => {
    expect(add(3, [0, 1, -1])).toStrictEqual([3, 4, 2]);
    expect(add(3, [2, 3, 4])).toStrictEqual([5, 6, 7]);
});

test('Array.contains', () => {
    expect(contains(3, [1, 2, 2])).toBe(false);
    expect(contains(3, [1, 3, 2])).toBe(true);
});

test('Array.combine', () => {
    expect(combine([0, 1, 2], [2, 6, 6])).toStrictEqual([0, 1, 2, 2, 6, 6]);
});

test('Array.reverse', () => {
    expect(reverse(['cat', 'dog', 1, 'panda', true])).toStrictEqual([true, 'panda', 1, 'dog', 'cat']);
});

test('Array.sort', () => {
    expect(sort([5, 2, 6, 10, 12])).toStrictEqual([2, 5, 6, 10, 12]);
    expect(sort(['dog', 'cat', 'zebra', 'panda'])).toStrictEqual(['cat', 'dog', 'panda', 'zebra']);
    expect(sort([true, null, [], undefined, {}])).toStrictEqual([]);
});

test('Array.union', () => {
    expect(union([0, 1, 2], [2, 6, 6])).toStrictEqual([0, 1, 2, 6]);
});

test('Array.intersect', () => {
    expect(intersect([0, 1, 2], [2, 6, 6])).toStrictEqual([2]);
});

test('Array.difference', () => {
    expect(difference([0, 1, 2], [2, 6, 6])).toStrictEqual([0, 1]);
});

test('Array.defined', () => {
    expect(defined([0, true, null, 'panda', NaN, 100])).toStrictEqual([0, true, 'panda', 100]);
});

test('Array.remove', () => {
    expect(remove(0, [0, true, null, 'panda', NaN, 100])).toStrictEqual([true, null, 'panda', NaN, 100]);
    expect(remove(0, [0, true, null, 'panda', 0, 100])).toStrictEqual([true, null, 'panda', 100]);
    expect(remove(0, [0, 0, 0, 0, 0, 0])).toStrictEqual([]);
});

test('Array.flatten', () => {
    expect(flatten([1, 4, [2], [['panda'], [[true]]]])).toStrictEqual([1, 4, 2, 'panda', true]);
});

test('Array.findMissingNumber', () => {
    expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
});

