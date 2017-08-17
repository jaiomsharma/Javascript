var body = document.querySelector("body");
var isBlack = false;

setInterval(function(){
if(isBlack){
   body.style.background = "white";
}
  else {
  body.style.background = "#000000";
}
  isBlack = !isBlack;
}, 1000);
