//1

function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(7, 23));

//2

function pow(x, n) {
    return x ** n;
}

console.log(pow(3, 4));

//3.1

function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}

console.log(checkAge(10));

//3.2

function checkAgeTwo(age) {
    return age >= 18 || confirm('Батьки дозволили?');
}

console.log(checkAgeTwo(20));