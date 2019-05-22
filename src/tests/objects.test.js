const { identity, value, length, keys, values, hasProperty, merge, get, omit, omitAll, toPairs } = require('../components/numbers');

test('Object.identity', () => {
    let obj = { test: 'foo' };
    expect(identity(obj)).toStrictEqual(obj);
});

// test('Object.value', () => {
//     t.is(component.value('name', { name: 'John', age: 57 }), 'John');
// });

// test('Object.length', () => {
//     t.is(component.length({ name: 'John', age: 57 }), 2);
// });

// test('Object.keys', () => {
//     t.deepEqual(component.keys({ name: 'John', age: 57 }), ['name', 'age']);
// });

// test('Object.values', () => {
//     t.deepEqual(component.values({ name: 'John', age: 57 }), ['John', 57]);
// });

// test('Object.hasProperty', () => {
//     t.true(component.hasProperty('name', { name: 'John', age: 57 }));
//     t.false(component.hasProperty('John', { name: 'John', age: 57 }));
// });

// test('Object.merge', () => {
//     t.deepEqual(component.merge({ name: 'John', age: 57 }, { phone: '5555555555' }), { name: 'John', age: 57, phone: '5555555555' });
//     t.deepEqual(component.merge({ name: 'John', age: 57 }, { name: 'Jane', phone: '5555555555' }), { name: 'Jane', age: 57, phone: '5555555555' });
// });

// test('Object.get', () => {
//     t.is(component.get('address.city', { address: { city: 'Atlanta' } }), 'Atlanta');
//     t.is(component.get('address.city', {}), undefined);
// });

// test('Object.omit', () => {
//     t.deepEqual(component.omit('name', { name: 'John', age: 57 }), { age: 57 });
// });

// test('Object.omitAll', () => {
//     t.deepEqual(component.omitAll(['name', 'phone'], { name: 'John', age: 57, phone: '5555555555' }), { age: 57 });
// });

// test('Object.toPairs', () => {
//     t.deepEqual(component.toPairs({ name: 'John', age: 57 }), [['name', 'John'], ['age', 57]]);
//     t.deepEqual(component.toPairs({ name: 'John', age: 57, phone: '5555555555' }), [['name', 'John'], ['age', 57], ['phone', '5555555555']]);
// });
