// Student Grade Generator
const marks = parseInt(prompt("Enter student marks (0-100):"));

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

console.log(`Grade: ${grade}`);