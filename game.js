var buttonColors = ["red", "blue", "green", "yellow"];
//keeps track of the pattern in the game
var gamePattern = [];

var userClickedPattern = [];

function nextSequence(){
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


$(".btn").on( "click", function() {
    var userChosenColor = this.id
    userClickedPattern.push(userChosenColor)
    playSound(userChosenColor)
  } );

  function playSound(soundName){
    var buttonAudio = new Audio("sounds/" + soundName + ".mp3")
    buttonAudio.play()
  }