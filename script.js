let display = document.getElementById('showSum');
let buttons = document.getElementById('buttons');
let calculateBtn = document.getElementById('calculateBtn');
let operatorBtn = document.querySelectorAll('.operator');
let clickedNum;

// save clicked numbers
let num = [];
let currentNum = '';

//save clicked operators
let operator = [];
let currentOperator = '';

// click event on number buttons
buttons.addEventListener('click', getValue);

// function to ask for the clicked button value
function getValue(e) {
  clickedNum = e.target;
  let numValue = clickedNum.value;

  if (clickedNum.classList.contains('num')) {
    currentNum += numValue;

    if (currentOperator === '') {
      return;
    }
    //save operator(s) to array
    num.push(currentOperator);
    currentOperator = '';
  } else if (clickedNum.classList.contains('operator')) {
    currentOperator += numValue;

    if (currentNum === '') {
      return;
    }
    // save num to array
    num.push(currentNum);
    currentNum = '';
  }
  console.log(num.join(' '));
}

calculateBtn.addEventListener('click', () => {
  console.log(sum);
});
