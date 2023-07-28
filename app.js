const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//event listener. 1st argument - type of event 2) callback function.
//callback means a function within a function - only carried out when triggered.

btn.addEventListener("click", function () {
  //get random number between 0 - 3.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //math random by itself gives you a value between 0-1. BUT NOT 1.
  //math.floor rounds down e.g 0.9 to 0.
  //colors.length gives us 3 items in the list.
  //Math.Random (0.0-0.99) * colors.length (values of 0 to 3 (not 4) as the index is from 0-2)
  return Math.floor(Math.random() * colors.length);
}
