// function sleepIn(weekday,vacation){
//   return(!weekday || vacation);
// }

// function monkeyTrouble(aSmile,bSmile){
//   return (aSmile && bSmile)|| (!aSmile && !bSmile)
// }

// function stringTimes(str,n){
//   var returnStr=" ";
//   var i=0;
//   while (i<n) {
//     return += str
//     i++
//
//   }
//   return returnStr
//
// }


// function luckySum(a,b,c){
//
// if(a===13){
//   return 0
// }
// elseif(b===13){
//   return a
// }
// elseif(c===13){
//   return a+b
// }
// else{
// return a+b+c
// }
//
// }


// function caught_speeding(speed,is_birthday){
//
// if (is_birthday){
//   speed -=5
// }
// if (speed<=60){
//   return 0
// }
//   else if (60< speed<=80) {
//     return 1
//
//   }else {
//     return 2
//   }
// }

function makeBricks(small,big,goal){
  return goal%5>=0 && goal%5-small<=0 && small+5*big>=goal;
}
