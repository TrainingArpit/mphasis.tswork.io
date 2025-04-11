// loanCalc.ts
 
// Define the function to calculate the monthly loan payment
export function calculateMonthlyPayment(
    principal: number,
    annualInterestRate: number,
    loanTermInYears: number
): number {
    // Ensure inputs are valid
    if (principal <= 0 || annualInterestRate < 0 || loanTermInYears <= 0) {
        throw new Error("Invalid input: Principal, interest rate, and loan term must be positive values.");
    }
 
    // Convert annual interest rate to a decimal
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    // Convert loan term in years to months
    const numberOfPayments = loanTermInYears * 12;
 
    // Calculate the monthly payment using the formula
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
 
    return principal * (numerator / denominator);
}
 
// Example usage (can be removed or commented out if not needed in the module)
const principal = 100000; // Example principal amount
const annualInterestRate = 5; // Example annual interest rate in percent
const loanTermInYears = 15; // Example loan term in years
 
try {
    const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears);
    console.log(`Monthly Payment: $${monthlyPayment.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}