// Assignment code here
var passwordLength = parseInt(prompt("Enter password length (min 8 characters):"), 10);

// var (passwordLength < 8) {
//     passwordLength = parseInt(prompt("Password length must be at least 8 characters. Enter password length:"));
// };


var passgen = confirm("Would you like to generate a password?");
var numbers = confirm("Would you like numbers?");
var specChars = confirm("Would you like special characters?");
var lwrcase = confirm("Would you like lower case?");
var uprcase = confirm("Would you like upercase?");

var characterset = "";

if (numbers) {
  characterset += "1234567890";
}

if (specChars) {
  characterset += "!@#$%^&*()_+-=[]{}|;':\",.<>/?\\";
}

if (lwrcase) {
  characterset += "abcdefghijklmnopqrstuvwxyz";
}

if (uprcase) {
  characterset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);