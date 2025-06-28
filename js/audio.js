menuMusic.volume = 0.1;
btnAudio.volume = 0.07;
hoverAudio.volume = 0.5;

volumeSlider.addEventListener("input", function(event) {
  menuMusic.volume = event.target.value; 
});
