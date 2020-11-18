var headOne=document.querySelector('#one')
var headTw0=document.querySelector('#two')
var headThree=document.querySelector('#three')

headOne.addEventListener('mouseover',function(){
  headOne.textContent="Mouse Currently Over";
  headOne.style.color='red';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent="HOVER OVER ME";
  headOne.style.color='black';
})

headTw0.addEventListener('click',function(){
  headTw0.textContent='CLICKED ON';
  headTw0.style.color='blue';
})

headThree.addEventListener('dblclick',function(){
  headThree.setContent='I WAS DOUBLE CLICKED';
  headThree.style.color='green';
})
