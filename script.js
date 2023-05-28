//your JS code here. If required.
var audio = document.getElementById("audio");
var buttons = document.getElementById("buttons");

buttons.addEventListener("click", function(event) {
  var button = event.target;
  if (button.className === "btn") {
    audio.play();
  } else if (button.className === "stop") {
    audio.pause();
  }
});
