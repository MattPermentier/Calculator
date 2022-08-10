let display = document.getElementById('showSum');
let buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => {
  let clickedBtn = e.target;

  if (clickedBtn.tagName !== 'BUTTON') {
    console.log('wrong click');
  } else {
    display.innerHTML = clickedBtn.value;
  }
});
