const generateBtn = document.querySelector("#generate");
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCased = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCased = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


function getRandomCharacter(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}

function getUserOptions() {
  const passwordLength = parseInt(
    prompt("How many characters should the password be?")
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a valid password must be a number between 8 and 128");
    return;
  }
  const hasSpecialChars = confirm("Do you want special characters?");
  const hasUpperCase = confirm("Do you want uppercase letters?");
  const hasLowerCase = confirm("Do you want lowercase letters?");
  const hasNumbers = confirm("Do you want numbers");

  const passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialChars: hasSpecialChars,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
  };
  return passwordOptions;
}

function generatePassword() {
  const passwordOptions = getUserOptions();

  console.log(passwordOptions);
  let possiblePasswordChars = [];
  const password = [];

  if (passwordOptions.hasSpecialChars) {
    possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
    
  }
  if (passwordOptions.hasNumbers) {
    possiblePasswordChars = possiblePasswordChars.concat(numbers);
    
  }

  if (passwordOptions.hasLowerCase) {
    possiblePasswordChars = possiblePasswordChars.concat(lowerCased);
    
  }

  if (passwordOptions.hasUpperCase) {
    possiblePasswordChars = possiblePasswordChars.concat(upperCased);

  }

  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    const randomChar = getRandomCharacter(possiblePasswordChars);
    password.push(randomChar);
  }
  console.log(possiblePasswordChars);
  console.log(password);
  return password.join("");
}
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);


