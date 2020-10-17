// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// Collect User Preferences
var userInput = parseInt(prompt("How long do you want the password between 8 and 128 characters?"))
    if (userInput >= 8 && userInput <= 128) {
      var lengthUserInput = userInput;  
      var lowercaseUserInput = confirm("Do you want to include lowercase letters?")
      var uppercaseUserInput = confirm("Do you want to include uppercase letters?")
      var numericUserInput = confirm("Do you want to include numbers?")
      var specialCharUserInput = confirm("Do you want to include special characters?")   
    } else alert("Please input numbers between 8 and 128")

// Define password character options
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

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
 
var countLength = Math.ceil(lengthUserInput / countTrue)

// Push user requested characters to tempPass variable
// If confirm is true, push characters from array at random 
// Use countLength to ensure each character type is represented
var tempPass = []
  if (lowercaseUserInput === true) {
    for (let i = 0; i < countLength; i++) {
      let random = Math.floor(Math.random() * 26);
      tempPass.push(letters[random]);
    }
  } 
  if (uppercaseUserInput === true) {
    for (let i = 0; i < countLength; i++) {
      let random = Math.floor(Math.random() * 26);
      tempPass.push(upperLetters[random]);
    }
  } 
  if (numericUserInput === true) {
    for (let i = 0; i < countLength; i++) {
      let random = Math.floor(Math.random() * 10);
      tempPass.push(numbers[random]);
    }
  } 
  if (specialCharUserInput === true) {
    for (let i = 0; i < countLength; i++) {
      let random = Math.floor(Math.random() * 10);
      tempPass.push(specialCharacters[random]);
    }
  } 

// Edit tempPass length to match user's requested length
tempPass2 = []

for (let i = 0; i < lengthUserInput; i++) {
  let random = Math.floor(Math.random() * lengthUserInput);
  tempPass2.push(tempPass[random]);
}

// Remove commas 
password = tempPass2.join('');
console.log(`Final pass is ${password}`);
console.log(`Final password length is ${password.length}`);
return password;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





