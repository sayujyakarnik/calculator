var displayText = "0";
var content = document.getElementById("display");

function addNumber(value) {
  displayText += value;
  displayNum += value;
  content.textContent = displayText;
  console.log(displayText, "", displayNum);
}

var currentNumber = 0;
var displayNum = "";
var operator = "";
var n0 = 0;
var n1 = 0;
var n2 = 0;

var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var decimal = document.getElementById("decimal");

var clear = document.getElementById("clear");
var sum = document.getElementById("sum");
var equals = document.getElementById("equals");
var brackets = document.getElementById("brackets");
var remainder = document.getElementById("remainder");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var sub = document.getElementById("sub");

zero.addEventListener("click", function () {
  addNumber("0");
});
one.addEventListener("click", function () {
  addNumber("1");
});
two.addEventListener("click", function () {
  addNumber("2");
});
three.addEventListener("click", function () {
  addNumber("3");
});
four.addEventListener("click", function () {
  addNumber("4");
});
five.addEventListener("click", function () {
  addNumber("5");
});
six.addEventListener("click", function () {
  addNumber("6");
});
seven.addEventListener("click", function () {
  addNumber("7");
});
eight.addEventListener("click", function () {
  addNumber("8");
});
nine.addEventListener("click", function () {
  addNumber("9");
});
decimal.addEventListener("click", function () {
  addNumber(".");
});

clear.addEventListener("click", function () {
  location.reload();
});
brackets.addEventListener("click", function () {
  checkperentesis();
});
sum.addEventListener("click", function () {
  equalsf();
  //currentNumber = Number(displayNum)
  //numberDecider(currentNumber)
  console.log("operator pressed");
  operator = "sum";
  displayText += "+";
  content.textContent = displayText;
  currentNumber = 0;
  displayNum = "";
});
sub.addEventListener("click", function () {
  equalsf();
  //currentNumber = Number(displayNum)
  //numberDecider(currentNumber)
  console.log("operator pressed");
  operator = "sub";
  displayText += "-";
  content.textContent = displayText;
  currentNumber = 0;
  displayNum = "";
});
remainder.addEventListener("click", function () {
  equalsf();
  console.log("operator pressed");
  //currentNumber = Number(displayNum)
  //numberDecider(currentNumber)
  operator = "remainder";
  displayText += "%";
  content.textContent = displayText;
  currentNumber = 0;
  displayNum = "";
});
multiply.addEventListener("click", function () {
  equalsf();
  console.log("operator pressed");
  //currentNumber = Number(displayNum)
  //numberDecider(currentNumber)
  operator = "multiply";
  displayText += "*";
  content.textContent = displayText;
  currentNumber = 0;
  displayNum = "";
});
divide.addEventListener("click", function () {
  equalsf();
  console.log("operator pressed");
  //currentNumber = Number(displayNum)
  //numberDecider(currentNumber)
  operator = "divide";
  displayText += "/";
  content.textContent = displayText;
  currentNumber = 0;
  displayNum = "";
});

equals.addEventListener("click", function () {
  console.log("equals pressed");
  equalsf();
  n1 = 0;
  n2 = 0;
  //var currentNumber = Number(displayNum);
  //numberDecider(currentNumber)
  //operationPerfformer()
});

function add() {
  currentNumber = Number(displayText);
  numberDecider(currentNumber);
  operator = "sum";
  displayText += "+";
  currentNumber = 0;
}

function equalsf() {
  var currentNumber = Number(displayNum);
  numberDecider(currentNumber);
  operationPerfformer();
}
function addbrackkets() {
  checkperentesis();
}

function checkperentesis() {
  if (displayText.length === 0) {
    displayText += "(";
    content.textContent = displayText;
    return;
  }
  for (let i = displayText.length - 1; i >= 0; i--) {
    const x = displayText[i];

    if (x === "(") {
      displayText += ")";
      content.textContent = displayText;
      return;
    } else if (x === ")") {
      displayText = displayText + "(";
      content.textContent = displayText;
      return;
    }
  }

  displayText += "(";
  content.textContent = displayText;
}
function numberDecider(currentNumber) {
  if (n1 == 0) {
    n1 = currentNumber;
    console.log("n1 is ", n1);
  } else if (n2 == 0) {
    console.log("currentNumber", currentNumber);
    n2 = currentNumber;
    console.log("n2 is", n2);
  }
}
function operationPerfformer() {
  if (operator == "sum") {
    displayText = n1 + n2;
    currentNumber = n1 + n2;
    console.log("n1 is  ", n1, " ", "n2 is ", n2);
    console.log("n1 + n2 is ", n1 + n2);
    content.textContent = displayText;
    n1 = n1 + n2;
  } else if (operator == "sub") {
    displayText = n1 - n2;
    content.textContent = displayText;
    n1 = n1 - n2;
  } else if (operator == "multiply") {
    displayText = n1 * n2;
    content.textContent = displayText;
    n1 = n1 * n2;
  } else if (operator == "divide") {
    displayText = n1 / n2;
    content.textContent = displayText;
    n1 = n1 / n2;
  } else if (operator == "remainder") {
    displayText = n1 % n2;
    content.textContent = displayText;
    n1 = n1 % n2;
  }
  console.log("new n1", n1);
  n2 = 0;
}
