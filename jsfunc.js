
//global scoope
var v=" GLOBAL VARIABLE"
var stuff="Global stuff"

function fun(stuff){
  console.log(v);
  stuff="Reassign stuff inside func"
  console.log(stuff);
}

fun()
console.log(stuff);
