function calculateNetSalary(basicSalary, benefits) {
  const tax = calculateTax(basicSalary);
  const nhifDeduction = calculateNHIF(basicSalary);
  const nssfDeduction = calculateNSSF(basicSalary);
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  return {
      Tax: tax,
      NHIF_Deduction: nhifDeduction,
      NSSF_Deduction: nssfDeduction,
      Gross_Salary: grossSalary,
      Net_Salary: netSalary
  };
}
function calculateTax(basicSalary) {
  let tax = 0;
  if (basicSalary <= 24000) {
      tax = 0.1 * basicSalary;
  } else if (basicSalary <= 40166) {
      tax = (0.1 * 24000) + (0.25 * (basicSalary - 24000));
  } else if (basicSalary <= 57692) {
      tax = (0.1 * 24000) + (0.25 * (40166 - 24000)) + (0.3 * (basicSalary - 40166));
  } else if (basicSalary <= 76300) {
      tax = (0.1 * 24000) + (0.25 * (40166 - 24000)) + (0.3 * (57692 - 40166)) + (0.3 * (basicSalary - 57692));
  } else if (basicSalary <= 96385) {
      tax = (0.1 * 24000) + (0.25 * (40166 - 24000)) + (0.3 * (57692 - 40166)) + (0.3 * (76300 - 57692)) + (0.3 * (basicSalary - 76300));
  } else {
      tax = (0.1 * 24000) + (0.25 * (40166 - 24000)) + (0.3 * (57692 - 40166)) + (0.3 * (76300 - 57692)) + (0.3 * (96385 - 76300)) + (0.35 * (basicSalary - 96385));
  }
  return tax;
}
function calculateNHIF(basicSalary) {
  let nhifDeduction = 0;
  if (basicSalary <= 5999) {
      nhifDeduction = 150;
  } else if (basicSalary <= 7999) {
      nhifDeduction = 300;
  } else if (basicSalary <= 11999) {
      nhifDeduction = 400;
  } else if (basicSalary <= 14999) {
      nhifDeduction = 500;
  } else if (basicSalary <= 19999) {
      nhifDeduction = 600;
  } else if (basicSalary <= 24999) {
      nhifDeduction = 750;
  } else if (basicSalary <= 29999) {
      nhifDeduction = 850;
  } else if (basicSalary <= 34999) {
      nhifDeduction = 900;
  } else if (basicSalary <= 39999) {
      nhifDeduction = 950;
  } else if (basicSalary <= 44999) {
      nhifDeduction = 1000;
  } else if (basicSalary <= 49999) {
      nhifDeduction = 1100;
  } else if (basicSalary <= 59999) {
      nhifDeduction = 1200;
  } else if (basicSalary <= 69999) {
      nhifDeduction = 1300;
  } else if (basicSalary <= 79999) {
      nhifDeduction = 1400;
  } else if (basicSalary <= 89999) {
      nhifDeduction = 1500;
  } else if (basicSalary <= 99999) {
      nhifDeduction = 1600;
  } else {
      nhifDeduction = 1700;
  }
  return nhifDeduction;
}

function calculateNSSF(basicSalary) {
  const nssfRate = 0.06; 
  const nssfDeduction = nssfRate * basicSalary;
  return nssfDeduction;
}


const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"))
const salaryDetails = calculateNetSalary(basicSalary, benefits);
alert("Tax (PAYE): " + salaryDetails.Tax.toFixed(2) +
  "NHIF Deduction: " + salaryDetails.NHIF_Deduction.toFixed(2) +
  "NSSF Deduction: " + salaryDetails.NSSF_Deduction.toFixed(2) +
  "Gross Salary: " + salaryDetails.Gross_Salary.toFixed(2) +
  "Net Salary: " + salaryDetails.Net_Salary.toFixed(2));

