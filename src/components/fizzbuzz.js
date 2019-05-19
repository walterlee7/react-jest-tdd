function monkeybars(a) {
    if (a % 15 === 0) {
        return "monkeybars";
    }
    if (a % 3 === 0) {
        return "monkey";
    }
    if (a % 5 === 0) {
        return "bars";
    }
}

function fizzbuzz(a) {
    for (let i = 1; i <= a; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        }
        else if (i % 3 === 0) {
            console.log('fizz');
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

// monkeybars(3);
// fizzbuzz(3);

module.exports = { fizzbuzz, monkeybars };