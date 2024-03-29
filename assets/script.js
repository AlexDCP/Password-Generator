// Assignment code here
var passwordLength;
passwordLength = parseInt(prompt("Enter password length (min 8 characters):"), 10);

while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Password length must be at least 8 characters, and no greater than 128. Enter password length:"));
};

// These are the prompts that will store the boolean value for the needed characters in the password
var passgen = confirm("Would you like to generate a password?");
var numbers = confirm("Would you like numbers?");
var specChars = confirm("Would you like special characters?");
var lwrcase = confirm("Would you like lower case?");
var uprcase = confirm("Would you like uppercase?");

// These are the variables for what boolean values were given above
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

// This is the function to use the variable's stored values from above to generate the randomized part of the password
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