//your JS code here. If required.
let audio = document.getElementById("audio");
let buttons = document.querySelectorAll('button');
let audio0 = new Audio("https://github.com/acciojob/Soundbar-Nihal00/blob/master/sounds/applause.mp3");
let audio1 = new Audio("https://github.com/acciojob/Soundbar-Nihal00/blob/master/sounds/boo.mp3");
let audio2 = new Audio("https://github.com/acciojob/Soundbar-Nihal00/blob/master/sounds/gasp.mp3");
let audio3 = new Audio("https://github.com/acciojob/Soundbar-Nihal00/blob/master/sounds/tada.mp3");
let audio4 = new Audio("https://github.com/acciojob/Soundbar-Nihal00/blob/master/sounds/victory.mp3");
let audio5 = new Audio("https://github.com/acciojob/Soundbar-Nihal00/blob/master/sounds/wrong.mp3");

for(let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(event) {
	  var button = event.target;
	  if (button.className === "btn") {
	    audio+[i].play();
	  } else if (button.className === "stop") {
	    audio.pause();
	  }
	});
}



