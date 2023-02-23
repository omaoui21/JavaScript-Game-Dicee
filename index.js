var NumberRandom = Math.floor(Math.random() *6)+1;
var randomDiceImage = "dice" + NumberRandom + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var NumberRandom2 = Math.floor(Math.random() *6) +1;
var randomDiceImage2 = "dice" + NumberRandom2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if(NumberRandom>NumberRandom2){

  document.querySelector('h1').innerHTML="Play 1 Win"

}else if(NumberRandom<NumberRandom2){

  document.querySelector('h1').innerHTML="Play 2 Win"

}else{

  document.querySelector('h1').innerHTML="Draw"
}
