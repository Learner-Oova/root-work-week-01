const age = 21; 
const score = 85; 
const hasLaptop = true; 
const hasInternet = true; 
const completedApplication = true;

if (age >= 18 && hasLaptop && hasInternet && completedApplication) {
    if (score >= 85) {
    console.log("Priority Candidate");
    } else if (score >= 60) {
    console.log("Eligible");
    } else {
    console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}
/* Greeting */   
const name = "Ojo-Ariyo Obafemi Victor";
console.log(`Hello Rootwork. My name is ${name}.`);  

/* Check if a number is even or odd */  
let x = 4;
if (x % 2 === 0) {
  console.log(`${x} is even`);
} else {
  console.log(`${x} is odd`);
}