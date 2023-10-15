function myEdge(base, height) {
    return (base + height)-1;
  }
  
  document.getElementById("edge").onclick = function () {
    let base = parseFloat(prompt("Enter your base Value"));
    let height = parseFloat(prompt("Enter your height value"));
    console.log(myEdge(base, height));
    document.getElementById("edgeresult").innerText =
      "The base is: " +
      base +
      " and the Height is: " +
      height +
      " so the max edge of triangle is: " +
      myEdge(base, height);
  };
  