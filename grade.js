let mark = prompt("Kindly enter the student's mark (0-100):");

if (mark < 0 || mark > 100) {
  alert("Invalid mark. Kindly enter a mark between 0 and 100.");
} else {

  if (mark > 79) {
    grade = "A";
  } else if (mark >= 60) {
    grade = "B";
  } else if (mark >= 49) {
    grade = "C";
  } else if (mark >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  alert("The student's grade is: " + grade);
}