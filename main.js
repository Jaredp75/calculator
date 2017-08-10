
var buttons = document.querySelectorAll('#calculator button');
var decimalAdd = false;
var operators = ['/', '-', '*', '+'];

for (var i=0; i<buttons.length; i++) {
  buttons[i].onclick = function(e) {
    var input = document.querySelector('.display');
    var inputValue = input.innerHTML;
    var btnValue = this.innerHTML;

    //Clears display when AC is clicked
    if (btnValue == 'AC') {
      input.innerHTML = '';
      decimalAdd = false;
    }

    //Evaluates when equals is clicked
    else if (btnValue == '=') {
      var equation = inputValue;
      var lastChar = equation[equation.length-1];

      //Check if lastChar is an operator or decimal
      if (operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/,'');
      if (equation)
        input.innerHTML = eval(equation);
      decimalAdd = false;
    }

    //Shows button clicked in display
    else if (operators.indexOf(btnValue) > -1) {
      var lastChar = inputValue[inputValue.length-1];
      if (inputValue != '' && operators.indexOf(lastChar) == -1)
        input.innerHTML += btnValue;
      else if (inputValue == '' && btnValue == '-')
        input.innerHTML += btnValue;
      if (operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
        input.innerHTML = inputValue.replace(/.$/,btnValue);
      }
      decimalAdd = false;
    }

    else if (btnValue == '.') {
      if (!decimalAdd) {
        input.innerHTML += btnValue;
        decimalAdd = true;
      }
    }

    else {
      input.innerHTML += btnValue;
    }

    e.preventDefault();
  }
}
