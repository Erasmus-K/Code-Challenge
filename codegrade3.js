function calculateGrade() {
  let marks = parseInt(document.getElementById("marksInput").value);
  let result = document.getElementById("result");

  if (marks < 0 || marks > 100 || isNaN(marks)) {
    result.textContent = "Invalid input! Marks should be between 0 and 100.";
    result.style.color = "red";
  } else {
    let grade;
    if (marks > 79) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 49) grade = "C";
    else if (marks >= 40) grade = "D";
    else grade = "E";

    result.textContent = `The grade is: ${grade}`;
    result.style.color = "#1e90ff";
  }
}
