var display = "";
var tempValue = "";
var operator = "";
var isResult = 0;

const inputBox = document.querySelector("#inputBox");
inputBox.textContent = display;

clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  display = "";
  tempValue = "";
  inputBox.textContent = display;
});

zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "0";
    inputBox.textContent = display;
    isResult = 0;
  }
});

one = document.querySelector("#one");
one.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "1";
    inputBox.textContent = display;
    isResult = 0;
  }
});

two = document.querySelector("#two");
two.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "2";
    inputBox.textContent = display;
    isResult = 0;
  }
});

three = document.querySelector("#three");
three.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "3";
    inputBox.textContent = display;
    isResult = 0;
  }
});

four = document.querySelector("#four");
four.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "4";
    inputBox.textContent = display;
    isResult = 0;
  }
});

five = document.querySelector("#five");
five.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "5";
    inputBox.textContent = display;
    isResult = 0;
  }
});

six = document.querySelector("#six");
six.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "6";
    inputBox.textContent = display;
    isResult = 0;
  }
});

seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "7";
    inputBox.textContent = display;
    isResult = 0;
  }
});

eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "8";
    inputBox.textContent = display;
    isResult = 0;
  }
});

nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  if (isResult == 1) {
    display = "";
  }
  if (inputBox.textContent.length < 12) {
    display = display + "9";
    inputBox.textContent = display;
    isResult = 0;
  }
});

dot = document.querySelector("#dot");
dot.addEventListener("click", () => {
  var decimalCheck = display.toString();
  if (decimalCheck.includes(".")) {
  } else if (inputBox.textContent.length < 12) {
    display = display + ".";
    inputBox.textContent = display;
  }
});

plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  if (tempValue != "") {
    tempValue = operate();
  } else {
    tempValue = display;
  }
  display = "";
  operator = "+";
  inputBox.textContent = display;
});

divide = document.querySelector("#divide");
divide.addEventListener("click", () => {
  if (tempValue != "") {
    tempValue = operate();
  } else {
    tempValue = display;
  }
  display = "";
  operator = "/";
  inputBox.textContent = display;
});

times = document.querySelector("#times");
times.addEventListener("click", () => {
  if (tempValue != "") {
    tempValue = operate();
  } else {
    tempValue = display;
  }
  display = "";
  operator = "*";
  inputBox.textContent = display;
});

minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
  if (tempValue != "") {
    tempValue = operate();
  } else {
    tempValue = display;
  }
  display = "";
  operator = "-";
  inputBox.textContent = display;
});

equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
  if (tempValue == "") {
    inputBox.textContent = display;
  } else {
    display = operate();
    if (isNaN(display)) {
      display = "";
      tempValue = "";
    } else {
      var lengthCheck = display.toString().length;
      if (lengthCheck > 12) {
        inputBox.textContent = "NUM TOO LARGE";
        display = "";
        tempValue = "";
      } else {
        inputBox.textContent = display;
        isResult = 1;
        tempValue = "";
      }
    }
  }
});

var add = function (a, b) {
  return a + b;
};

var subtract = function (a, b) {
  return a - b;
};

var multiply = function (a, b) {
  return a * b;
};

var div = function (a, b) {
  return a / b;
};
var operate = function () {
  let num1 = parseFloat(tempValue);
  let num2 = parseFloat(display);
  switch (operator) {
    case "+":
      return Math.round(add(num1, num2) * 100) / 100;
    case "-":
      return Math.round(subtract(num1, num2) * 100) / 100;
    case "*":
      return Math.round(multiply(num1, num2) * 100) / 100;
    case "/":
      if (num2 == 0) {
        display = "NICE TRY :)";
        inputBox.textContent = display;
        return "Nice Try :)";
      } else {
        return Math.round(div(num1, num2) * 100) / 100;
      }
  }
};
