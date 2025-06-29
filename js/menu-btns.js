document.body.addEventListener("click", function(event) {
  if(event.target.id === "playBtn") {
    playBtnAudio.play();
    playBtnAudio.currentTime = 0;
  } else if (
    event.target.classList.contains("menuBtn") ||
    event.target.classList.contains("modalBtn")
  ) {
    btnAudio.play();
    btnAudio.currentTime = 0;
  }

  // Open settings modal
  if (event.target.textContent === "Settings") {
    settingsModal.style.display = "flex";
  }

  // Close settings modal
  if (event.target.id === "closeBtn") {
    settingsModal.style.display = "none";
  }
});

// Hover sound needs mouseover on buttons
document.body.addEventListener("mouseover", function(event) {
  const el = event.target;
  if (
    el.classList.contains("menuBtn") ||
    el.classList.contains("modalBtn")  
  ) {
    hoverAudio.play();
    hoverAudio.currentTime = 0;
  }
});

// fullscreen button event listener
fullscreenBtn.addEventListener("click", function() {

  if(!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenBtn.textContent = "exit FS"
  } else {
    document.exitFullscreen();
    fullscreenBtn.textContent = "fullscreen";
  }
});

// if user presses esc to exit full screen update the text content of the fullscreen button
document.addEventListener("fullscreenchange", function () {
  
  if(document.fullscreenElement) {
    fullscreenBtn.textContent = "exit FS";
  } else {
    fullscreenBtn.textContent = "fullscreen";
  }
});