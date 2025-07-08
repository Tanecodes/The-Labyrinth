const menuMusic = document.getElementById("menuMusic");
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
bedroomAudio.volume = 0;
storyAudio.volume = 0;

volumeSlider.addEventListener("input", function(event) {
  storyAudio.volume = parseFloat(event.target.value);
  bedroomAudio.volume =  parseFloat(event.target.value);
});






