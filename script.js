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

// Collect User Preference
let lengthUserInput = prompt("How long do you want the password between 8 and 128 characters?")
  console.log(lengthUserInput);
 
let lowercaseUserInput = confirm("Do you want to include lowercase letters?")
  console.log(lowercaseUserInput);

let uppercaseUserInput = confirm("Do you want to include uppercase letters?")
  console.log(uppercaseUserInput);

let numericUserInput = confirm("Do you want to include numeric characters?")
  console.log(numericUserInput);

let specialCharUserInput = confirm("Do you want to include special characters?")
  console.log(specialCharUserInput);

// Set password options

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  console.log(letters);

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  console.log(numbers);

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  console.log(specialCharacters);

// Calculate number of each desired parameter to append to password
// let countTrue = function() {
let countTrue = 0;
    if (lowercaseUserInput === true) {
      countTrue++;
  } if (uppercaseUserInput === true) {
    countTrue++;
  } if (numericUserInput === true) {
    countTrue++;
  } if (specialCharUserInput === true) {
    countTrue++;
  }
  console.log(countTrue)
// }


// let lengthParameter function()



// Set variable to hold password  
let testpass = [] 
  console.log(testpass)

