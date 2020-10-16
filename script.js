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


length = prompt("How long do you want the password between 8 and 128 characters?")
 
lowercase = confirm("Do you want to include lowercase letters?")

uppercase = confirm("Do you want to include uppercase letters?")

numeric = confirm("Do you want to include numeric characters?")

specialChar = confirm("Do you want to include special characters?")
  