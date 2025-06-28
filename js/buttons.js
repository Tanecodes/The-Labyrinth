document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains("menuBtn")) {
    btnAudio.play();
    btnAudio.currentTime = 0;
  }

  // Open settings modal
  if (event.target.textContent === "Settings") {
    settingsModal.style.display = "block";
  }

  // Close settings modal
  if (event.target.id === "closeBtn") {
    settingsModal.style.display = "none";
  }
});

// Hover sound needs mouseover on buttons
document.body.addEventListener("mouseover", function(event) {
  if (event.target.classList && event.target.classList.contains("menuBtn")) {
    hoverAudio.play();
    hoverAudio.currentTime = 0;
  }
});