// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt user for password criteria & generate password
function generatePassword() {

  // Prompt user for length of password
  var pwdLength = parseInt(prompt("How many characters do you require for your new password?"));

  // Validation checks
  // Checks for string input
  if (isNaN(pwdLength)) {
    alert("Password must be a number");
    return;
  }

  // Checks for required scope
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password must be between 8 and 128 characters long.")
    return;
  }

  // Confirm user requires lowercase, uppercase, numeric, and/or special characters
  var pwdLowercase = confirm("Would you like lowercase characters included?");
  var pwdUppercase = confirm("Would you like uppercase characters included?");
  var pwdNumerals = confirm("Would you like numeric characters included?");
  var pwdSpecials = confirm("Would you like special characters included?");

  // Checks that at least 1 option has been chosen
  if (!pwdLowercase && !pwdUppercase && !pwdNumerals && !pwdSpecials) {
    alert("At least one character set must be selected");
    return;
  }
}