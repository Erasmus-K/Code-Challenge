# JavaScript Challenges

This repository contains solutions to three JavaScript programming challenges.

## Challenges

### Challenge 1: Student Grade Generator
**File:** `js-challenges/challenge1.js`

Prompts the user to input student marks (0-100) and outputs the corresponding grade:
- A: > 79
- B: 60 to 79
- C: 49 to 59
- D: 40 to 49
- E: < 40

### Challenge 2: Speed Detector
**File:** `js-challenges/challenge2.js`

Takes car speed as input and:
- Prints "Ok" if speed < 70
- Calculates demerit points (1 point per 5 km/s above 70)
- Prints "License suspended" if points > 12

### Challenge 3: Net Salary Calculator
**File:** `js-challenges/challenge3.js`

Calculates net salary based on basic salary and benefits, including:
- Payee (Tax) using KRA rates
- NHIF deductions
- NSSF deductions
- Gross and Net salary calculations

## How to Run

Each file can be run independently in a JavaScript environment that supports `prompt()` function (like a browser console or Node.js with appropriate setup).

## Tax Calculation References

- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF Rates](https://www.aren.co.ke/payroll/taxrates.htm)
- NSSF: 6% of pensionable pay (maximum 1080)