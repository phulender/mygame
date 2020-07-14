
function myFunction(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = name1+" Wins! 🚩";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = name2+" Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
}
myFunction();
var name1 = prompt("enter player 1 name");

var name2 = prompt("enter player 2 name");

document.getElementById("demo1").innerHTML = name1;

document.getElementById("demo2").innerHTML = name2;

document.querySelector("h1").innerHTML = "Click on PLAY button"
