"use strict";

var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var reset = document.querySelector("#reset");
var input = document.getElementsByTagName("input")[0];
var p = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = input.value;

p1button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
     
    }
    p1Display.textContent = p1Score;
  }
});

p2button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
      
    }
  }
  p2Display.textContent = p2Score;
});


reset.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
});


input.addEventListener("change", function(){
  p.textContent = this.value;
  winningScore = Number(input.value);
  restart();
});

function restart(){
 p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false; 
};

