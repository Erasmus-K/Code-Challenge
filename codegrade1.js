// Import readline for user input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter student marks (0 - 100): ", function(input) {
  let marks = parseInt(input);

  if (marks < 0 || marks > 100 || isNaN(marks)) {
    console.log("Invalid input! Marks should be between 0 and 100.");
  } else {
    let grade;

    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 49) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }

    console.log("The grade is: " + grade);
  }

  rl.close();
});
