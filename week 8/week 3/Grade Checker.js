let score = parseInt(prompt("Enter the student's score:"));

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}
