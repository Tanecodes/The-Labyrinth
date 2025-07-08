const settingsModal = document.getElementById("settingsModal");

const fullscreenBtn = document.getElementById("fullscreenBtn");
const closeBtn = document.getElementById("closeBtn");
const modalBtn = document.querySelectorAll(".modalBtn");
const sliderWrapper = document.getElementById("sliderWrapper");

// playbutton
document.body.addEventListener("click", function(event) {
  if(event.target.id === "playBtn") {
    playBtnAudio.play();
    playBtnAudio.currentTime = 0;
    document.body.style.backgroundImage = "none";
    introduction();
  } else if (
    event.target.classList.contains("menuBtn") ||
    event.target.classList.contains("modalBtn") ||
    event.target.classList.contains("playerMenuBtnClass") ||
    event.target.classList.contains("playerMenuPanelBtn")
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

// Hover sound buttons
document.body.addEventListener("mouseover", function(event) {
  const el = event.target;
  if (
    el.classList.contains("menuBtn") ||
    el.classList.contains("modalBtn") ||
    el.classList.contains("playerMenuBtnClass") ||
    el.classList.contains("playerMenuPanelBtn")
  ) {
    hoverAudio.play();
    hoverAudio.currentTime = 0;
  }
});

// fullscreen button event listener
fullscreenBtn.addEventListener("click", function() {

  if(!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.fullscreenElement){
    document.exitFullscreen();
  }
});

// if user presses esc to exit full screen update the text content of the fullscreen button
document.addEventListener("fullscreenchange", function () {
  
  if(document.fullscreenElement) {
    fullscreenBtn.textContent = "Exit Fs";
  } else {
    fullscreenBtn.textContent = "Fullscreen";
  }
});

