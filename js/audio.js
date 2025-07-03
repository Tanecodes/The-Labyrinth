const menuMusic = document.getElementById("menuMusic");
const btnAudio = document.getElementById("btnAudio");
const playBtnAudio = document.getElementById("playBtnAudio");
const hoverAudio = document.getElementById("hoverAudio");

menuMusic.volume = 0.2;
btnAudio.volume = 0.1;
hoverAudio.volume = 0.3;
playBtnAudio.volume = 0.5;


const bedroomMusic = [
  {
    musicPath: "audio/background-audio/home.mp3"
  }
];

const bedroomAudio = new Audio(bedroomMusic[0].musicPath);
bedroomAudio.volume = 0.2;

volumeSlider.addEventListener("input", function(event) {
  menuMusic.volume = parseFloat(event.target.value); 
});






