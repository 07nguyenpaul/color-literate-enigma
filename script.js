var randButton = document.querySelector('.random-btn');
var resetButton = document.querySelector('.reset-btn');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor(){
  var diffBackgroundColor = document.querySelector("body");

  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);

  diffBackgroundColor.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

randButton.addEventListener('click', function() {
  generateColor();
});


resetButton.addEventListener('click', function() {
  document.querySelector('body').style.backgroundColor = ('white');
});
