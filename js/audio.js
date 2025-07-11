
const btnAudio = document.getElementById("btnAudio");
const playBtnAudio = document.getElementById("playBtnAudio");
const hoverAudio = document.getElementById("hoverAudio");

const music = [
  {
    musicPath: "audio/background-audio/home.mp3"
  },
  {
    musicPath: "audio/menu-audio/cloud-of-sorrow-13984.mp3"
  }
    
];

const bedroomAudio = new Audio(music[0].musicPath);
const storyAudio = new Audio(music[1].musicPath);

btnAudio.volume = 0.1;
hoverAudio.volume = 0.3;
playBtnAudio.volume = 0.5;
bedroomAudio.volume = 0.2;
storyAudio.volume = 0.2;

volumeSlider.addEventListener("input", function(event) {
  storyAudio.volume = parseFloat(event.target.value);
  bedroomAudio.volume =  parseFloat(event.target.value);
});

// item audio
const itemAudio = {
  bag: new Audio("audio/character/bag.mp3")
}
// footsteps and door sound effects
const villageAudio = {
  woodFeet: new Audio("audio/character/running-wood.mp3"),
  concreteFeet: new Audio("audio/character/footsteps-concrete.mp3"),
  door: new Audio("audio/character/wood-door.mp3"),
  doorBell: new Audio("audio/character/door-bell.mp3"),
  snoring: new Audio("audio/character/snoring.mp3")
};

// dialogue text effect audio
const dialogueAudio = {
  text: new Audio("audio/dialogue-audio/dialogueSFX.mp3")
};

dialogueAudio.text.loop = true;

villageAudio.door.currentTime = 0.5;

function concreteFeetAudio() {
  villageAudio.concreteFeet.currentTime = 0;
  villageAudio.concreteFeet.play();

  setTimeout(function() {
   villageAudio.concreteFeet.pause();
   villageAudio.concreteFeet.currentTime = 0;  
  }, 2200);
};

function doorBellAudio() {
  villageAudio.doorBell.currentTime = 0;
  villageAudio.doorBell.play();

  setTimeout(function() {
    villageAudio.doorBell.pause();
    villageAudio.doorBell.currentTime = 0;
  }, 2900);
};






