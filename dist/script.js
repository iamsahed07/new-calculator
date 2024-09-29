let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  if (currentInput.length < 12) {  // Limit to 12 digits to avoid overflow
    currentInput += number;
    updateScreen(currentInput);
  }
}

function addOperation(op) {
  if (currentInput === '') return; // Prevent operation if no number is entered
  if (previousInput !== '') calculate(); // Calculate if there's already a previous number
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearScreen() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateScreen('0');
}

function deleteDigit() {
  currentInput = currentInput.slice(0, -1);
  updateScreen(currentInput === '' ? '0' : currentInput);
}

function toggleSign() {
  if (currentInput === '') return; // Prevent toggling if no number is entered
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateScreen(currentInput);
}

function calculate() {
  if (previousInput === '' || currentInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  operator = '';
  previousInput = '';
  updateScreen(currentInput);
}

function updateScreen(value) {
  document.getElementById('screen').value = value;
}
