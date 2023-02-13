// Assignment code here
var passwordLength;
passwordLength = parseInt(prompt("Enter password length (min 8 characters):"), 10);

if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Password length must be at least 8 characters, and no greater than 128. Enter password length:"));
};




var passgen = confirm("Would you like to generate a password?");
var numbers = confirm("Would you like numbers?");
var specChars = confirm("Would you like special characters?");
var lwrcase = confirm("Would you like lower case?");
var uprcase = confirm("Would you like uppercase?");

var characterSet = "";

if (numbers) {
  characterSet += "1234567890";
}

if (specChars) {
  characterSet += "!@#$%^&*()_+-=[]{}|;':\",.<>/?\\";
}

if (lwrcase) {
  characterSet += "abcdefghijklmnopqrstuvwxyz";
}

if (uprcase) {
  characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}


function generatePassword() {
  var splitCharacterSet = characterSet.split("");
  var generatedPassword = "";

  console.log(splitCharacterSet);

  for (var i = 0; i < passwordLength; i++){
    var randomNum = Math.floor(Math.random() * splitCharacterSet.length);

    generatedPassword += splitCharacterSet[randomNum]
    // console.log(i)
  };

  return generatedPassword;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);