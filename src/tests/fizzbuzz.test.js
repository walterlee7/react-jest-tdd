const { fizzbuzz, monkeybars } = require('../components/fizzbuzz');

test('takes 3 and outputs monkey', () => {
    expect(monkeybars(3)).toBe('monkey');
});

test('takes 5 and outputs bars', () => {
    expect(monkeybars(5)).toBe('bars');
});

test('takes 15 and outputs monkeybars', () => {
    expect(monkeybars(15)).toBe('monkeybars');
});

test('takes 3 and outputs fizz', () => {
    expect(fizzbuzz(3)).toBe(console.log('fizz'));
});

test('takes 5 and outputs buzz', () => {
    expect(fizzbuzz(5)).toBe(console.log('buzz'));
});

test('takes 15 and outputs fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe(console.log('fizzbuzz'));
});
