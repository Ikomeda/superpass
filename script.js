// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = '1234567890';
var uppers = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var lowers = 'qwertyuiopasdfghjklzxcvbnm';
var symbols = '!@#$%^&*()_-+=';
var passwordLength = ""
var password = "";
var charactersToUse = "";

// Write password to the #password input
function writePassword() {
  var finishedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finishedPassword
  
};
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  passwordLength = parseInt(prompt("Choose a number between 8-128 for your password length"));
  console.log(typeof passwordLength)

  if (passwordLength <= 8 || passwordLength >= 128 || !passwordLength) {
    return;
  }
  
  var useNumbers = window.confirm("Do you want your password to include Numbers?")
  if (useNumbers) {charactersToUse = numbers};
  var useUppers = window.confirm("Do you want your password to include Upper case letters?")
  if (useUppers) {charactersToUse = charactersToUse + uppers};
  var useLowers = window.confirm("Do you want your password to include Lower Case Letters?")
  if (useLowers) {charactersToUse = charactersToUse + lowers};
  var useSymbols = window.confirm("Do you want your password to include Symbols?")
  if (useSymbols) {charactersToUse = charactersToUse + symbols};
  
  for (var i = 0; i < passwordLength; i++) {
    password = password + charactersToUse.charAt(Math.floor(Math.random() * charactersToUse.length));
    console.log(charactersToUse.length)
    console.log(password)
    
  }
  return password;
}
