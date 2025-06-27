const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");

const menuMusic = document.getElementById("menuMusic");

const btnAudio = document.getElementById("btnAudio");
btnAudio.volume = 0.07;

const hoverAudio = document.getElementById("hoverAudio");
hoverAudio.volume = 1;

startBtn.addEventListener("click", function() {
  btnAudio.play();
  menuMusic.play();

  startMenu.classList.add("fade-out");

  setTimeout(function() {
    startMenu.style.display = "none";
  }, 2000);
});
