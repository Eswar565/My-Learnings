const MAX = 2147483647;
const MIN = -2147483648;

let result = 0;

function checkRange(value) {
    return value >= MIN && value <= MAX;
}

function add(a, b) {
    if (b === undefined) {
        result = result + a;
    } else {
        result = a + b;
    }
    return result;
}

function subtract(a, b) {
    if (b === undefined) {
        result = result - a;
    } else {
        result = a - b;
    }
    return result;
}

function multiply(a, b) {
    if (b === undefined) {
        result = result * a;
    } else {
        result = a * b;
    }
    return result;
}

function divide(a, b) {
    if (b === undefined) {
        if (a === 0) return "Cannot divide by zero";
        result = result / a;
    } else {
        if (b === 0) return "Cannot divide by zero";
        result = a / b;
    }
    return result;
}

function power_of(a, b) {
    if (b === undefined) {
        result = result ** a;
    } else {
        result = a ** b;
    }
    return result;
}

// Testing
console.log(add(2, 3));      
console.log(add(3));
console.log(multiply(2));    
console.log(subtract(6));  
console.log(divide(2));      
console.log(power_of(2));   