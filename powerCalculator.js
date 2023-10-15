function myPowerCal(voltage, current) {
  return voltage * current;
}

document.getElementById("powercal").onclick = function () {
  let voltage = parseFloat(prompt("Enter Voltage Value"));
  let current = parseFloat(prompt("Enter Current value"));
  console.log(myPowerCal(voltage, current));
  document.getElementById("powercalresult").innerText =
    "The voltage is: " +
    voltage +
    " and the current is: " +
    current +
    " so the power is: " +
    myPowerCal(voltage, current);
};
