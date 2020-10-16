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
var lengthUserInput = prompt("How long do you want the password between 8 and 128 characters?")
  console.log(lengthUserInput);
 
var lowercaseUserInput = confirm("Do you want to include lowercase letters?")
  console.log(lowercaseUserInput);

var uppercaseUserInput = confirm("Do you want to include uppercase letters?")
  console.log(uppercaseUserInput);

var numericUserInput = confirm("Do you want to include numeric characters?")
  console.log(numericUserInput);

var specialCharUserInput = confirm("Do you want to include special characters?")
  console.log(specialCharUserInput);

// Set password options

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  console.log(letters);

var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  console.log(upperLetters);

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i].toUpperCase());
  
// }

// var upperLetters = function(letters) {
//   return letters.toUpperCase();
// }

//   console.log(upperLetters);

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  console.log(numbers);

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
  console.log(specialCharacters);

// Calculate number of each requested parameter to append to password
var countTrue = 0;
    if (lowercaseUserInput === true) {
      countTrue++
  } if (uppercaseUserInput === true) {
    countTrue++;
  } if (numericUserInput === true) {
    countTrue++;
  } if (specialCharUserInput === true) {
    countTrue++;
  }
  console.log(lengthUserInput / countTrue)

// Push user requested characters to tempPass variable
// If confirm is true, push characters from array at random based on length

var tempPass = [] 
  if (lowercaseUserInput === true) {
    tempPass.push(letters);
  } 
  if (uppercaseUserInput === true) {
    tempPass.push(upperLetters);
  } 
  if (numericUserInput === true) {
    tempPass.push(numbers);
  } 
  if (specialCharUserInput === true) {
    tempPass.push(specialCharacters);
  } 
  
  
  console.log(tempPass)
// Edit tempPass variablet o generate final password based on user requests




 

