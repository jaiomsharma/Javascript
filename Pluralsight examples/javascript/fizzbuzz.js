var randomnumber = Math.round(Math.random() *5);
console.log(randomnumber);
if(randomnumber%3 === 0){
  alert("fizz");
}else if(randomnumber%5 === 0){
  alert("buzz");
}else{
  console.log(randomnumber);
}
