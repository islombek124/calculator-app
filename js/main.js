const buttons = document.querySelectorAll('.btn'),
  inp = document.getElementById('input'),
  clearBtn = document.querySelector('.clear__btn'),
  equalBtn = document.querySelector('.there__btn');

buttons.forEach((item) => {
  item.addEventListener('click', function(e){
    inp.value += e.target.value;
  });
});

equalBtn.addEventListener('click', () => {
  let result = eval(inp.value);
  inp.value = result;
});