// Net Salary Calculator - Test Version
const basicSalary = 50000; // Sample basic salary
const benefits = 10000;    // Sample benefits

const grossSalary = basicSalary + benefits;

// PAYE Tax calculation (KRA rates)
let payee = 0;
if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
} else if (grossSalary <= 32333) {
    payee = 2400 + (grossSalary - 24000) * 0.25;
} else if (grossSalary <= 500000) {
    payee = 4483 + (grossSalary - 32333) * 0.3;
} else if (grossSalary <= 800000) {
    payee = 144783 + (grossSalary - 500000) * 0.325;
} else {
    payee = 242283 + (grossSalary - 800000) * 0.35;
}

// NHIF deductions
let nhif = 0;
if (grossSalary <= 5999) nhif = 150;
else if (grossSalary <= 7999) nhif = 300;
else if (grossSalary <= 11999) nhif = 400;
else if (grossSalary <= 14999) nhif = 500;
else if (grossSalary <= 19999) nhif = 600;
else if (grossSalary <= 24999) nhif = 750;
else if (grossSalary <= 29999) nhif = 850;
else if (grossSalary <= 34999) nhif = 900;
else if (grossSalary <= 39999) nhif = 950;
else if (grossSalary <= 44999) nhif = 1000;
else if (grossSalary <= 49999) nhif = 1100;
else if (grossSalary <= 59999) nhif = 1200;
else if (grossSalary <= 69999) nhif = 1300;
else if (grossSalary <= 79999) nhif = 1400;
else if (grossSalary <= 89999) nhif = 1500;
else if (grossSalary <= 99999) nhif = 1600;
else nhif = 1700;

// NSSF deductions (6% of pensionable pay, max 1080)
const nssf = Math.min(grossSalary * 0.06, 1080);

const netSalary = grossSalary - payee - nhif - nssf;

console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${payee.toFixed(2)}`);
console.log(`NHIF Deductions: ${nhif}`);
console.log(`NSSF Deductions: ${nssf.toFixed(2)}`);
console.log(`Net Salary: ${netSalary.toFixed(2)}`);