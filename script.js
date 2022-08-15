let display = document.getElementById('showSum');
let resultDisplay = document.getElementById('showResult');
let buttons = document.getElementById('buttons');
let resetBtn = document.querySelector('.reset');
let deleteBtn = document.querySelector('.delete');
let calculateBtn = document.getElementById('calculateBtn');
let operatorBtn = document.querySelectorAll('.operator');
let clickedNum;

// global variable
let numValue;

// array that gets the input values when clicked on calculateBtn
let num = [];

// saves the input values
let input = '';

// click event on number buttons
buttons.addEventListener('click', getValue);
resetBtn.addEventListener('click', reset);
deleteBtn.addEventListener('click', deleteInput);
calculateBtn.addEventListener('click', calculate);

// function to ask for the clicked button value
function getValue(e) {
  clickedNum = e.target;
  numValue = clickedNum.value;

  if (
    clickedNum.classList.contains('num') ||
    clickedNum.classList.contains('operator')
  ) {
    input += numValue;
    display.innerHTML = input;
  } else {
    return;
  }
}

// delete the last input
function deleteInput() {
  input = input.slice(0, -1);
  display.innerHTML = input;
}

// delete the whole sum
function reset() {
  input = '';
  num = [];
  display.innerHTML = '0';
  resultDisplay.innerHTML = '';
}

// calculates the result
function calculate() {
  num.push(input);
  let userInput = `${num.join('')}`;
  let result = Function('return ' + userInput)();
  resultDisplay.innerHTML = result;
  num = [];
  input = result;
}

document.addEventListener('keydown', (e) => {
  let target = e;

  switch (target.key) {
    case 'Backspace':
      deleteInput();
      break;
    case 'Delete':
      reset();
      break;
    case 'Enter':
      calculate();
      break;
    case '0':
      input += '0';
      display.innerHTML = input;
      break;
    case '1':
      input += '1';
      display.innerHTML = input;
      break;
    case '2':
      input += '2';
      display.innerHTML = input;
      break;
    case '3':
      input += '3';
      display.innerHTML = input;
      break;
    case '4':
      input += '4';
      display.innerHTML = input;
      break;
    case '5':
      input += '5';
      display.innerHTML = input;
      break;
    case '6':
      input += '6';
      display.innerHTML = input;
      break;
    case '7':
      input += '7';
      display.innerHTML = input;
      break;
    case '8':
      input += '8';
      display.innerHTML = input;
      break;
    case '9':
      input += '9';
      display.innerHTML = input;
      break;
    case '.':
      input += '.';
      display.innerHTML = input;
      break;
    case '%':
      input += '%';
      display.innerHTML = input;
      break;
    case '/':
      input += '/';
      display.innerHTML = input;
      break;
    case '+':
      input += '+';
      display.innerHTML = input;
      break;
    case '-':
      input += '-';
      display.innerHTML = input;
      break;
    case 'x':
      input += '*';
      display.innerHTML = input;
      break;
  }
});
