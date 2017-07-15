/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

alert("Suppose you are in a store.Suddenly you see a zombie approaching towards you!!");
var weapon = prompt("you look around the store to find a suitable weapon.You find a hammer, an axe and a fire extinguisher. What do you choose to attack him??");
var randomnumber = Math.round(Math.random());

alert("You choose" + "  " +  weapon + "GOOD LUCK");

if(randomnumber === 0 ){
  alert("The zombie bites you.You loose!!!");
}else if(randomnumber === 1 ){
  alert("You kill the zombie with" + " " +  weapon + "You Won");
}