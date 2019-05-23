const { identity, combine, length, isEmpty, toArray, clip, reverse, truncate, strip, repeat, contains, isEqual, isSimilar } = require('../components/strings');

test('String.identity', () => {
    expect(identity('Hello')).toStrictEqual('Hello');
});

test('String.combine', () => {
    expect(combine('Hello', ' World')).toBe('Hello World');
});

test('String.length', () => {
    expect(length('')).toBe(0);
    expect(length('a')).toBe(1);
    expect(length('ab')).toBe(2);
});

test('String.isEmpty', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('foo')).toBe(false);
});

test('String.toArray', () => {
    expect(toArray('Hello World').length).toBe(2);
    expect(toArray('Hello World')[0]).toBe('Hello');
    expect(toArray('Hello World')[1]).toBe('World');
});

test('String.clip', () => {
    expect(clip('Hello', 4)).toBe('Hell');
});

test('String.reverse', () => {
    expect(reverse('Hello')).toBe('olleH');
});

test('String.truncate', () => {
    expect(truncate('', 5)).toBe('');
    expect(truncate('Hello', 3)).toBe('Hello');
    expect(truncate('Hello', 4)).toBe('H...');
    expect(truncate('Hello', 5)).toBe('He...');
    expect(truncate('Hello', 8)).toBe('Hello');
});

test('String.strip', () => {
    expect(strip(' Hello ')).toBe('Hello');
    expect(strip('Hello')).toBe('Hello');
});

test('String.repeat', () => {
    expect(repeat('a', 2)).toBe('aa');
    expect(repeat('a', 3)).toBe('aaa');
});

test('String.contains', () => {
    expect(contains('ab', 'b')).toBe(true);
    expect(contains('ab', 'c')).toBe(false);
});
