var randButton = document.querySelector('.random-btn');
var resetButton = document.querySelector('.reset-btn');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor(){

  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}

randButton.addEventListener('click', function() {
  var diffBackgroundColor = document.querySelector("body");

  var randomColor = generateColor();
  var ifWhite = true;

  while (ifWhite) {
    if (randomColor == "rgb(255,255,255)") {
      randomColor = generateColor();
    }
    diffBackgroundColor.style.backgroundColor = randomColor;
    ifWhite = false;
  }
});


resetButton.addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = ('white');
});
