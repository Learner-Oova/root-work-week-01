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