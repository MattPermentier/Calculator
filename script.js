let display = document.getElementById('showSum');
let buttons = document.getElementById('buttons');
let calculateBtn = document.getElementById('calculateBtn');

let sum = [];

buttons.addEventListener('click', (e) => {
  let clickedBtn = e.target;

  if (clickedBtn.classList.contains('num')) {
    let toNum = parseInt(clickedBtn.value);
    sum.push(toNum);
  } else if (!clickedBtn.classList.contains('num')) {
    sum.push(clickedBtn.value);
  }
  //   console.log(sum.join(' '));
  display.innerHTML = sum.join(' ');
  operate();
});

function operate() {}
