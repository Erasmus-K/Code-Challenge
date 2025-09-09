function calculateSalary() {
  // 1️⃣ Get input values
  let basicSalary = parseFloat(document.getElementById("basicSalary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  // 2️⃣ Gross Salary
  let grossSalary = basicSalary + benefits;

  // 3️⃣ PAYE Tax
  let paye = calculatePAYE(grossSalary);
  paye = Math.max(0, paye - 2400); // personal relief

  // 4️⃣ SHIF (2.75%)
  let shif = 0.0275 * grossSalary;

  // 5️⃣ NSSF
  let nssf = calculateNSSF(grossSalary);

  // 6️⃣ Housing Levy (1.5%)
  let housingLevy = 0.015 * grossSalary;

  // 7️⃣ Net Salary
  let netSalary = grossSalary - (paye + shif + nssf + housingLevy);

  // 8️⃣ Show results
  document.getElementById("output").innerHTML = `
    Gross Salary: ${grossSalary.toFixed(2)} <br>
    PAYE (Tax): ${paye.toFixed(2)} <br>
    SHIF: ${shif.toFixed(2)} <br>
    NSSF: ${nssf.toFixed(2)} <br>
    Housing Levy: ${housingLevy.toFixed(2)} <br>
    <strong>Net Salary: ${netSalary.toFixed(2)}</strong>
  `;
}

// Function to calculate PAYE
function calculatePAYE(gross) {
  let tax = 0;
  if (gross <= 24000) tax = gross * 0.10;
  else if (gross <= 32333) tax = (24000*0.10) + ((gross-24000)*0.25);
  else if (gross <= 500000) tax = (24000*0.10) + (8333*0.25) + ((gross-32333)*0.30);
  else if (gross <= 800000) tax = (24000*0.10) + (8333*0.25) + ((500000-32333)*0.30) + ((gross-500000)*0.325);
  else tax = (24000*0.10) + (8333*0.25) + ((500000-32333)*0.30) + (300000*0.325) + ((gross-800000)*0.35);
  return tax;
}

// Function to calculate NSSF
function calculateNSSF(gross) {
  let tier1 = Math.min(gross, 8000) * 0.06;
  let tier2 = 0;
  if (gross > 8000) tier2 = Math.min(gross-8000, 64000) * 0.06;
  return tier1 + tier2;
}
