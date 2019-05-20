const { identity, value, length, sum, square, add, contains, combine, reverse, sort, union, intersect, difference, defined, remove, flatten, findMissingNumber } = require('../components/arrays');

test('ArrayDrills.identity', () => {
    let arr = [0, 1, 2];
    expect(identity(arr)).toBe(arr);
});

test('ArrayDrills.value', () => {
    expect(value(2, [0, 1, 2])).toBe(2);
});

test('ArrayDrills.length', () => {
    expect(length([0, 1, -1])).toBe(3);
});

test('ArrayDrills.sum', () => {
    expect(sum([0, 1, -1])).toBe(0);
    expect(sum([0, 1, 2])).toBe(3);
});

test('ArrayDrills.square', () => {
    expect(square([0, 1, -1])).toStrictEqual([0, 1, 1]);
    expect(square([2, 3, 4])).toStrictEqual([4, 9, 16]);
});

test('ArrayDrills.add', () => {
    expect(add(3, [0, 1, -1])).toStrictEqual([3, 4, 2]);
    expect(add(3, [2, 3, 4])).toStrictEqual([5, 6, 7]);
});

test('ArrayDrills.contains', () => {
    expect(contains(3, [1, 2, 2])).toBe(false);
    expect(contains(3, [1, 3, 2])).toBe(true);
});

test('ArrayDrills.combine', () => {
    expect(combine([0, 1, 2], [2, 6, 6])).toStrictEqual([0, 1, 2, 2, 6, 6]);
});

test('ArrayDrills.reverse', () => {
    expect(reverse(['cat', 'dog', 1, 'panda', true])).toStrictEqual([true, 'panda', 1, 'dog', 'cat']);
});

test('ArrayDrills.sort', () => {
    expect(sort([5, 2, 6, 10, 12])).toStrictEqual([2, 5, 6, 10, 12]);
    expect(sort(['dog', 'cat', 'zebra', 'panda'])).toStrictEqual(['cat', 'dog', 'panda', 'zebra']);
    expect(sort([true, null, [], undefined, {}])).toStrictEqual([]);
});

test('ArrayDrills.union', () => {
    expect(union([0, 1, 2], [2, 6, 6])).toStrictEqual([0, 1, 2, 6]);
});

// test('ArrayDrills.intersect', () => {
//     t.deepEqual(component.intersect([0, 1, 2], [2, 6, 6]), [2]);
// });

// test('ArrayDrills.difference', () => {
//     t.deepEqual(component.difference([0, 1, 2], [2, 6, 6]), [0, 1]);
// });

// test('ArrayDrills.defined', () => {
//     t.deepEqual(component.defined([0, true, null, 'panda', NaN, 100]), [0, true, 'panda', 100]);
// });

// test('ArrayDrills.remove', () => {
//     t.deepEqual(component.remove(0, [0, true, null, 'panda', NaN, 100]), [true, null, 'panda', NaN, 100]);
//     t.deepEqual(component.remove(0, [0, true, null, 'panda', 0, 100]), [true, null, 'panda', 100]);
//     t.deepEqual(component.remove(0, [0, 0, 0, 0, 0, 0]), []);
// });

// test('ArrayDrills.flatten', () => {
//     t.deepEqual(component.flatten([1, 4, [2], [['panda'], [[true]]]]), [1, 4, 2, 'panda', true]);
// });

test('ArrayDrills.findMissingNumber', () => {
    expect(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])).toBe(5);
});

