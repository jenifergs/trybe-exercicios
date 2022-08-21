const weightInKg = 80; 
const heightInCm = 163;

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);
  
  const bmi = weight / (height / 100) ** 2;
  
  return bmi;
}

function main() {
  const bmi = handleBMI(weightInKg, heightInCm);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();