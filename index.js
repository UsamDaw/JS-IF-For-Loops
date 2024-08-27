/* Task 1
var navnKorrekt = "Usama";
var passordKorrekt = "123456789";
var navnTast = prompt("Enter your username");
var passordTast = prompt("Enter your password");

if (navnTast === navnKorrekt && passordTast === passordKorrekt) {
    window.alert("Successfully logged in");
} else {
    window.alert("Incorrect username or password");
    location.reload()
}
*/

/* Task 2
var numberEin = parseFloat(prompt("Type in the first number:"));
var numberTo = parseFloat(prompt("Type in the second number:"));
var numberTrey = parseFloat(prompt("And the last number:"));
var gjennomsnitt = (numberEin + numberTo + numberTrey) / 3;
alert("The average number is " + gjennomsnitt);
location.reload()
*/

/* Task 3
var lockIn = prompt("C til F eller F til C?").toUpperCase();
var temperatures = parseFloat(prompt("Temperatur:"));
var display = lockIn === 'C' 
    ? (temperatures * 9/5) + 32 + "F" 
    : (temperatures - 32) * 5/9 + "C";

alert(temperatures + (lockIn === 'C' ? "C er " : "F er ") + display);
location.reload()
*/

/* Task 4
var numberr = parseInt(prompt("Type in a number: "), 10);
var sum = (numberr * (numberr + 1)) / 2;
alert("From 1 to " + numberr + " is " + sum + ".");
location.reload()
*/

/* Task 5 & 6
var points = parseInt(prompt("Enter the number of points for a grade:"), 10);

var grade;
if (points >= 0 && points <= 30) {
    grade = 1;
} else if (points >= 31 && points <= 45) {
    grade = 2;
} else if (points >= 46 && points <= 60) {
    grade = 3;
} else if (points >= 61 && points <= 75) {
    grade = 4;
} else if (points >= 76 && points <= 90) {
    grade = 5;
} else if (points >= 91 && points <= 100) {
    grade = 6;
} else {
    alert("Invalid amount of points or incorrect input");
    grade = null;
}
if (grade !== null) {
    alert("The grade for " + points + " points is: " + grade);
}

location.reload()
*/