"use strict";
// loanCalc.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMonthlyPayment = calculateMonthlyPayment;
// Define the function to calculate the monthly loan payment
function calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears) {
    // Ensure inputs are valid
    if (principal <= 0 || annualInterestRate < 0 || loanTermInYears <= 0) {
        throw new Error("Invalid input: Principal, interest rate, and loan term must be positive values.");
    }
    // Convert annual interest rate to a decimal
    var monthlyInterestRate = annualInterestRate / 100 / 12;
    // Convert loan term in years to months
    var numberOfPayments = loanTermInYears * 12;
    // Calculate the monthly payment using the formula
    var numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    var denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    return principal * (numerator / denominator);
}
// Example usage (can be removed or commented out if not needed in the module)
var principal = 100000; // Example principal amount
var annualInterestRate = 5; // Example annual interest rate in percent
var loanTermInYears = 15; // Example loan term in years
try {
    var monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears);
    console.log("Monthly Payment: $".concat(monthlyPayment.toFixed(2)));
}
catch (error) {
    console.error(error.message);
}
