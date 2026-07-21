const MAX = 2147483647;
const MIN = -2147483648;

let previousResult = 0;

function isOutOfRange(a, b) {
    return a > MAX || b > MAX || a < MIN || b < MIN;
}

function add(a, b) {
    if (b === undefined) {
        b = a;
        a = previousResult;
    }

    if (isOutOfRange(a, b)) {
        return "out of range";
    }

    let result = a + b;

    if (result > MAX || result < MIN) {
        return "out of range";
    }

    previousResult = result;
    return result;
}

function subtract(a, b) {
    if (b === undefined) {
        b = a;
        a = previousResult;
    }

    if (isOutOfRange(a, b)) {
        return "out of range";
    }

    let result = a - b;

    if (result > MAX || result < MIN) {
        return "out of range";
    }

    previousResult = result;
    return result;
}

function multiply(a, b) {
    if (b === undefined) {
        b = a;
        a = previousResult;
    }

    if (isOutOfRange(a, b)) {
        return "out of range";
    }

    let result = a * b;

    if (result > MAX || result < MIN) {
        return "out of range";
    }

    previousResult = result;
    return result;
}

function divide(a, b) {
    if (b === undefined) {
        b = a;
        a = previousResult;
    }

    if (b === 0) {
        return "Cannot divide by zero";
    }

    if (isOutOfRange(a, b)) {
        return "out of range";
    }

    let result = a / b;

    if (result > MAX || result < MIN) {
        return "out of range";
    }

    previousResult = result;
    return result;
}

function power_of(a, b) {
    if (b === undefined) {
        b = a;
        a = previousResult;
    }

    if (isOutOfRange(a, b)) {
        return "out of range";
    }

    let result = Math.pow(a, b);

    if (result > MAX || result < MIN) {
        return "out of range";
    }

    previousResult = result;
    return result;
}

console.log("Add: " + add(2, 3));
console.log("Add: " + add(5));
console.log("Mul: " + multiply(2));
console.log("Sub: " + subtract(5));
console.log("Div: " + divide(3));
console.log("Power: " + power_of(2));
