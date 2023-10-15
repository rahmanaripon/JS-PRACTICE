function myAgeToDay(age) {
  return age * 365;
}

document.getElementById("agetoday").onclick= function(){
    let age=parseFloat(prompt("Enter your age"))
    console.log(myAgeToDay(age));
document.getElementById("agetodayresult").innerText="Your age is " + myAgeToDay(age) + "days"

}