var buttonColors = ["red", "blue", "green", "yellow"];
//keeps track of the pattern in the game
var gamePattern = [];

var userClickedPattern = [];
var level = 0;
function nextSequence(){
  $("h1").text("Level " + level)
  level++;
  //get random index for to choose a color
  const minCeiled = Math.ceil(0);
  const maxFloored = Math.floor(4);
  var randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

  var randomChosenColor = buttonColors[randomNumber];
  //add color to the end of the list
  gamePattern.push(randomChosenColor);
  var id = "#" + randomChosenColor;
  $(id).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

    
}

//handles event when a button is clicked
$(".btn").on( "click", function() {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  
  playSound(userChosenColor)
  animatePress(userChosenColor)
  checkAnswer()
} );

function playSound(soundName){
  var buttonAudio = new Audio("sounds/" + soundName + ".mp3")
  buttonAudio.play()
}

function animatePress(color){
  var button = document.getElementById(color)
  
  button.classList.add("pressed");

  setTimeout(function (){
    button.classList.remove("pressed")
  }, 100)
}

$(document).keypress(function (event){
  if(level == 0){
    clearGame()
  }
  nextSequence();
});

function checkAnswer(){
  //pattern is wrong
  if(gamePattern[userClickedPattern.length - 1] != userClickedPattern[userClickedPattern.length - 1]){
    $("body").addClass("game-over");
    $("h1").text("Game Over! Press A Key To Start Over")
    playSound("wrong")
    level = 0
  }
  //pattern is right and finished
  else if(gamePattern.length == userClickedPattern.length){
      userClickedPattern = [];
      $("h1").text("Level " + level + " Cleared!")
      setTimeout(nextSequence,3000)
  }
  //do nothing if sequence is right but not complete
}

function clearGame(){
  userClickedPattern = []
  gamePattern = []
  level = 0
  $("body").removeClass("game-over");
}
