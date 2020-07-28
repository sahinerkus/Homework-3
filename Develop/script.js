
// const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('password')
const buttonEl = document.getElementById("generate")
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
// characterAmountNumber.addEventListener('click', syncCharacterAmount)


buttonEl.addEventListener('click', e => {
  console.log("inside event listener")
  e.preventDefault()
  const characterAmount = +prompt("Enter a number between 8 to 128: ")
// const characterAmountNumber = document.getElementById('characterAmountNumber')
  const includeUppercase = confirm("Do you want upper case characters in your password?")
  const includeLowercase = confirm("Do you want lower case characters in your password?")
  const includeNumbers = confirm("Do you want numbers case in your password?")
  const includeSymbols = confirm("Do you want symbols in your password?")
  // const includeUppercase = includeUppercaseElement
  // const includeNumbers = includeNumbersElement
  // const includeSymbols = includeSymbolsElement
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
  passwordDisplay.value = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  // let charCodes = LOWERCASE_CHAR_CODES
  let charCodes = []
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  // characterAmountRange.value = value
}