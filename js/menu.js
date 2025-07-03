// start button event listener
const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");

const mainMenu = document.getElementById("mainMenu");

const settingsModal = document.getElementById("settingsModal");
const modalBtn = document.querySelectorAll(".modalBtn");
const volumeSlider = document.getElementById("volumeSlider");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const closeBtn = document.getElementById("closeBtn");

const sliderWrapper = document.getElementById("sliderWrapper");


startBtn.addEventListener("click", function() {
  btnAudio.play();

  startMenu.classList.add("fade-out");

  setTimeout(function() {
    menuMusic.play();
  }, 1500);

  setTimeout(function() {
    startMenu.remove(); 
    mainMenu.style.display = "flex";
  }, 2000);
});