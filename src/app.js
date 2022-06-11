/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function randomcardnumber() {
    let letter;
    let randomnumber = Math.floor(Math.random() * 13 + 1);
    console.log(randomnumber);
    let letterarray = ["A", "J", "Q", "K"];
    if (randomnumber > 10) {
      let index = randomnumber - 10;
      return (letter = letterarray[index]);
    } else if (randomnumber == 1) {
      return (letter = letterarray[0]);
    } else {
      return randomnumber;
    }
  }

  function randomicon() {
    let iconarray = ["♣", "♥", "♠", "♦"];
    let random = Math.floor(Math.random() * iconarray.length);
    return iconarray[random];
  }

  let icon = randomicon();
  document.querySelector("#cardnumber").innerHTML = randomcardnumber();
  document.querySelector("#cardicontop").innerHTML = icon;
  document.querySelector("#cardiconbottom").innerHTML = icon;
  if (randomicon() == "♥" || randomicon == "♦") {
    document.getElementById("cardicontop").style.color = "red";
    document.getElementById("cardiconbottom").style.color = "red";
    document.getElementById("cardnumber").style.color = "red";
  } else {
    document.getElementById("cardicontop").style.color = "black";
    document.getElementById("cardiconbottom").style.color = "black";
    document.getElementById("cardnumber").style.color = "black";
  }
};
