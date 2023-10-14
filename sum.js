// let numberOne = 5;
// let numberTwo = 10;
// console.log(numberOne + numberTwo);

function SummationFunction(num1, num2) {
  return num1 + num2;
}

document.getElementById("summation").onclick = function () {
  let num1 = parseFloat(window.prompt("Enter the first number"));
  let num2 = parseFloat(window.prompt("Enter the second number"));
  console.log(SummationFunction(num1, num2));
  document.getElementById(
    "summationresult"
  ).innerHTML = `The summation of ${num1} and ${num2} is: ${SummationFunction(
    num1,
    num2
  )}`;
};

// function addition(num1, num2) {
//   return num1 + num2;
// }

// document.getElementById("addition").onclick = function () {
//   let num1 = parseInt(window.prompt("Enter Number"));
//   let num2 = parseInt(window.prompt("Enter Another Number"));

//   console.log(`Addition of ${num1} and ${num2} is `, addition(num1, num2));
//   // document.write(`Addition of ${num1} and ${num2} is `, addition(num1, num2));

//   document.getElementById(
//     "addition-output"
//   ).innerText = `Addition of ${num1} and ${num2} is ${addition(num1, num2)}`;
// };
