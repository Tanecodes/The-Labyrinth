const volumeSlider = document.getElementById("volumeSlider");

sliderWrapper.addEventListener("mouseenter", function() {
   hoverAudio.play();
   hoverAudio.currentTime = 0;
});