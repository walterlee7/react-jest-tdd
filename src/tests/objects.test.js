const { identity, value, length, keys, values, hasProperty, merge, get, omit, omitAll, toPairs } = require('../components/objects');

test('Object.identity', () => {
    let obj = { test: 'foo' };
    expect(identity(obj)).toStrictEqual(obj);
});

test('Object.value', () => {
    expect(value('name', { name: 'John', age: 57 })).toBe('John');
});

test('Object.length', () => {
    expect(length({ name: 'John', age: 57 })).toBe(2);
});

test('Object.keys', () => {
    expect(keys({ name: 'John', age: 57 })).toStrictEqual(['name', 'age']);
});

test('Object.values', () => {
    expect(values({ name: 'John', age: 57 })).toStrictEqual(['John', 57]);
});

test('Object.hasProperty', () => {
    expect(hasProperty('name', { name: 'John', age: 57 })).toBe(true);
    expect(hasProperty('John', { name: 'John', age: 57 })).toBe(false);
});

test('Object.merge', () => {
    expect(merge({ name: 'John', age: 57 }, { phone: '5555555555' })).toStrictEqual({ name: 'John', age: 57, phone: '5555555555' });
    expect(merge({ name: 'John', age: 57 }, { name: 'Jane', phone: '5555555555' })).toStrictEqual({ name: 'Jane', age: 57, phone: '5555555555' });
});

test('Object.get', () => {
    expect(get('address.city', { address: { city: 'Atlanta' } })).toBe('Atlanta');
    expect(get('address.city', {})).toBe(undefined);
});

test('Object.omit', () => {
    expect(omit('name', { name: 'John', age: 57 })).toStrictEqual({ age: 57 });
});

test('Object.omitAll', () => {
    expect(omitAll(['name', 'phone'], { name: 'John', age: 57, phone: '5555555555' })).toStrictEqual({ age: 57 });
});

test('Object.toPairs', () => {
    expect(toPairs({ name: 'John', age: 57 })).toStrictEqual([['name', 'John'], ['age', 57]]);
    expect(toPairs({ name: 'John', age: 57, phone: '5555555555' })).toStrictEqual([['name', 'John'], ['age', 57], ['phone', '5555555555']]);
});
