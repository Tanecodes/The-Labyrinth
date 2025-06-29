menuMusic.volume = 0.1;
btnAudio.volume = 0.1;
hoverAudio.volume = 0.3;

volumeSlider.addEventListener("input", function(event) {
  menuMusic.volume = parseFloat(event.target.value); 
});
