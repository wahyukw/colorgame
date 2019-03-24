let randomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + red + ", " + green + ", " + blue +")";

  return rgb;
};

let generateRandomColors = (num) => {
  let arr = [];
  for(let i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
};

let pickColor = () => {
  let rng = Math.floor(Math.random() * colors.length);
  return colors[rng];
};

let changeColors = (color) => {
  for(let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
};

let h1 = document.querySelector("h1");
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let rgbDisplay = document.getElementById("display");
let msgDisplay = document.querySelector("#msg");
let newGame = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

let reset = () => {
  for(let i=0; i<squares.length; i++){
    squares[i].classList.remove("fadeOut");
  }
};

let playGame = () => {
  reset();
  for(let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", () => {
      let clickedColor = squares[i].style.backgroundColor;
      if(clickedColor === pickedColor){
        msgDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
        reset();
        newGame.textContent = "Play Again?";
      }
      else{
        squares[i].classList.add("fadeOut")
        msgDisplay.textContent = "Try Again!";
      }
    });
  }
}

rgbDisplay.textContent = pickedColor;


playGame();

newGame.addEventListener("click", () => {
  h1.style.backgroundColor = "steelblue";
  newGame.textContent = "New Colors";
  msgDisplay.textContent = "";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbDisplay.textContent = pickedColor;
  playGame();
});

easyBtn.addEventListener("click", () => {
  numSquares = 3;
  h1.style.backgroundColor = "steelblue";
  newGame.textContent = "New Colors";
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  msgDisplay.textContent = "";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbDisplay.textContent = pickedColor;
  for(let i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i]. style.display= "none";
    }
  }
  playGame();

});

hardBtn.addEventListener("click", () => {
  numSquares = 6;
  h1.style.backgroundColor = "steelblue";
  newGame.textContent = "New Colors";
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  msgDisplay.textContent = "";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbDisplay.textContent = pickedColor;
  for(let i=0; i<squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i]. style.display= "block";
  }
  playGame();
});