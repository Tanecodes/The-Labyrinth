// start button event listener
const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");
const mainMenu = document.getElementById("mainMenu");

document.getElementById("sceneContainer").classList.add("hidden");

startBtn.addEventListener("click", function() {
  btnAudio.play();

  startMenu.classList.add("fade-out");

  setTimeout(function() {
    storyAudio.play();
  }, 1500);

  storyAudio.loop = true;

  setTimeout(function() {
    startMenu.remove(); 
    mainMenu.style.display = "flex";
  }, 2000);
});