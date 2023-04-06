// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}

function generatePassword() 
  var passwordLength = prompt('How many characters should the password be?');
  var hasSpecialChars = confirm('Do you want special characters?');
  var hasUpperCase = confirm('Do you want uppercase letters?');
  var hasLowerCase = confirm('Do you want lowercase letters?');
  var hasNumbers = confirm('Do you want numbers');
​
  var passwordOptions = {
      passwordLength: passwordLength,
      hasSpecialChars: hasSpecialChars,
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasUpperCase,
      hasNumbers: hasNumbers, 
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
