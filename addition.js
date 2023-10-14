// let number = parseFloat(prompt("enyer the number"))
// console.log(number + 1);


function myFunction(number) {
  return number + 1;
}
document.getElementById('addition').onclick = function(){

    let number = parseFloat(window.prompt("input the number"));
    console.log(myFunction(number));
    document.getElementById('additionresult').innerHTML= `The next number of ${number} is: ${myFunction(number)}`
}


// function addition(num1, num2) {
//     return num1 + num2;
// }
// document.getElementById('addition').onclick = function () {

//     let num1 = parseInt(window.prompt("Enter Number"));
//     let num2 = parseInt(window.prompt("Enter Another Number"));

//     console.log(`Addition of ${num1} and ${num2} is `, addition(num1, num2));
//     // document.write(`Addition of ${num1} and ${num2} is `, addition(num1, num2));

//     document.getElementById('addition-output').innerText = `Addition of ${num1} and ${num2} is ${addition(num1, num2)}`;
// }