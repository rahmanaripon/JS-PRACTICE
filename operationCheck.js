let mark= 980;
let myMark = mark<=33
? "fail"
: mark >=34 && mark<=39
? "pass"
:mark>=40 && mark<=49
? "C"
:mark>=50 && mark<=59
? "C+"
:mark>=60 && mark<=69
? "B+"
:mark>=70 && mark<=79
? "A"
:mark>=80 && mark<=100
? "A+"
:"Exphel";
console.log(myMark);