
  var firstPlayerName = prompt("Give me Frist player name!");
  document.querySelectorAll("p")[0].innerHTML=firstPlayerName;

  var secondPlayerName = prompt("Giver me second player name!");
  document.querySelectorAll("p")[1].innerHTML=secondPlayerName;

  function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-dice6.png
  var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - dice6.png
  var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML =  firstPlayerName+ " wins !";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = secondPlayerName +" wins !";
  } else {
    document.querySelector("h1").innerHTML = " Draw !";
  }
}
