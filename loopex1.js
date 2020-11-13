var firstName=prompt("firstName please: ")
var lastName=prompt("last Name please: ")
var age=prompt("How old are you: ")
var height=prompt("What is your height: ")
var petName=prompt("what is your petName: ")
alert("Thank you so much for the informatiion!")

var nameCond=null;
var ageCond=null;
var heightCond=null;
var petCond=null;

if (firstName[0]===lastName[0]){
  nameCond=true;
}else {
  nameCond=false;
}

if (age>20 && age < 30){
  ageCond=true;

}
else {
  ageCond=false;
}

if(height>=170){
  heightCond=true;
}else {
  heightCond=false;
}

if (petName[petName.length-1]==="y"){
  petCond=true;
}else {
  petCond=false;
}

if(nameCond && ageCond && heightCond && petCond){

  console.log("welcome spy!!");
}
else {
  console.log("Nothing to show");
}
