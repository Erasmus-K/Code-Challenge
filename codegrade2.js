let marks = parseInt(prompt("Enter student marks (0 - 100):"));

    if (marks < 0 || marks > 100 || isNaN(marks)) {
      alert("Invalid input! Marks should be between 0 and 100.");
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

      alert("The grade is: " + grade);
    }
    