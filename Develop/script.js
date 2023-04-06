const generateBtn = document.querySelector("#generate");
const specialCharacters = [
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
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowerCased = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCased = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function getRandomCharacter(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}

function generatePassword() 
  const passwordLength = prompt('How many characters should the password be?');
  const hasSpecialChars = confirm('Do you want special characters?');
  const hasUpperCase = confirm('Do you want uppercase letters?');
  const hasLowerCase = confirm('Do you want lowercase letters?');
  const hasNumbers = confirm('Do you want numbers');
​
  const passwordOptions = {
      passwordLength: passwordLength,
      hasSpecialChars: hasSpecialChars,
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasUpperCase,
      hasNumbers: hasNumbers, 
};

const possiblePasswordChars = [];
const password = [];

if (passwordOptions.hasSpecialChars) {
  possiblePasswordChars=possiblePasswordChars.concat(specialCharacters);
  const randomChar = getRandomCharacter(specialCharacters);
  password.push(randomChar);
}
if (passwordOptions.hasNumbers){
  possiblePasswordChars=possiblePasswordChars.concat(hasNumbers);
  const randomChar=getRandomCharacter(hasNumbers);
  password.push(randomChar);
}

if (passwordOptions.hasLowerCase) {
  possiblePasswordChars=possiblePasswordChars.concat(hasLowerCase);
  const randomChar=getRandomCharacter(hasLowerCase);
  password.push(randomChar);
}

if (passwordOptions.hasUpperCase) {
  possiblePasswordChars=possiblePasswordChars.concat(hasUpperCase);
  const randomChar=getRandomCharacter(hasUpperCase);
  password.push(randomChar);
}

for (const i=0; i < passwordOptions.length-password.length; i++) {
  const randomChar = getRandomCharacter(possiblePasswordChars);
  password.push(randomChar);
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
