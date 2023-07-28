const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //initialises a new variable starting with #.
  let hexColor = "#";
  //loops through? less than 5 - as a hex has 6 items so index 0-5.
  for (let i = 0; i < 6; i++) {
    //the for loop (code here) means the action in the code block (instructions) will occur 6 times.
    //the hexColor variable/array gets added a random value from the array of hex,
    //by calling the random number Function.
    hexColor += hex[getRandomNumber()];
  }

  //updates the DOM
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

//math floor rounds down a number to make it an integer not decimal.
//math.random 0-0.9 x hex length which is 15 - in our hex array.
function getRandomNumber() {
  //my error was a capital on 'Random'
  return Math.floor(Math.random() * hex.length);
}
