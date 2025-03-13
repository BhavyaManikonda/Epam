const numbers = [10, 25, 30, 45, 60, 75, 90];

function filterEvenNumbers() {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
}
console.log("Even numbers in the array:", filterEvenNumbers());
