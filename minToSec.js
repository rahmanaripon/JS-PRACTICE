// let munite = 5;
// console.log(munite * 60);

function mintosec(input) {
  return input * 60;
}

document.getElementById("convert").onclick = function () {
  let input = parseFloat(prompt("Give the number that convert into seconds"));
  console.log(mintosec(input));
  document.getElementById("convertresult").innerText =
    "the number you give is " +
    input +
    ": so the seconds is :" +
    mintosec(input);
};
