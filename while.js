var x=0;

while (x<5) {
  console.log("x is currently"+x);

  if (x===3) {
    console.log("X is equal to three!");
    break;

  }
  console.log("x is still less than 5,adding 1 to x");


  x=x+1

}

var num=1;

while (num<11) {
  if (num%2===0) {
    console.log(num);

  }
  num=num+1

}


//for loops

for (var i = 0; i < 5; i++) {
  console.log("Numbr is "+i);
}

var word="ABCDEFGHIJK"

for(var i=0;i<word.length;i++){
  console.log(word[i]);
}
