function reverseNumber(num) {
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return num < 0 ? -reversed : reversed;
}

console.log(reverseNumber(12345));
console.log(reverseNumber(-56789));
/*document.write(reverseNumber(12345));
document.write(reverseNumber(-56789));
*/