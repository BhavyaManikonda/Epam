let p = parseFloat(prompt("Enter the principal amount:"));
let r = parseFloat(prompt("Enter the annual interest rate (in %):"));
let t = parseFloat(prompt("Enter the time (in years):"));

if (isNaN(p) || isNaN(r) || isNaN(t)) {
    alert("Please enter valid numbers for principal, rate, and time.");
} else {
    // 3. Simple Interest Calculation
    let interest = (p*r*t) / 100;

    // 4. Output Methods
    console.log(`Principal: ${p}`);
    console.log(`Rate: ${r}%`);
    console.log(`Time: ${t} years`);
    console.log(`Simple Interest: ${interest}`);

    alert(`The simple interest is: ${interest}`);
}
