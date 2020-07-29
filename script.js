
// Those are the vaiables for html-js connection
const passwordDisplay = document.getElementById('password')
const buttonEl = document.getElementById("generate")
//Those variables are standing for character codes. Each type of character is an array of numbers. Those arrays are the limits of my random number creation. .concat helps to bumble the arrays.
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


//The event listener is where we start to create our password. After we click the button, we will see the prompts and confirms to shape our password.
buttonEl.addEventListener('click', e => {
  e.preventDefault()
  const characterAmount = +prompt("Enter a number between 8 to 128: ")
  const includeUppercase = confirm("Do you want upper case characters in your password?")
  const includeLowercase = confirm("Do you want lower case characters in your password?")
  const includeNumbers = confirm("Do you want numbers case in your password?")
  const includeSymbols = confirm("Do you want symbols in your password?")
  //passwordDisplay addresses the password to the html loc. To do that, there is an array of character types turned in to a value.
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.value = password
})
  // The function we create the code.
function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {

  console.log("inside password generator")
  let charCodes = []
  //where we see what we have in our password
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  //where we create random number in chosen arrays
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}
//Multiple array Symbolcharcode
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
//Turn Character amount into a value from string
function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
 
}