menuMusic.volume = 0.1;
btnAudio.volume = 0.05;
hoverAudio.volume = 0.15;

volumeSlider.addEventListener("input", function(event) {
  menuMusic.volume = parseFloat(event.target.value); 
});
