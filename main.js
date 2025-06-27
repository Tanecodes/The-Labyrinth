const startBtn = document.getElementById("startBtn");
const menuMusic = document.getElementById("menuMusic");

startBtn.addEventListener("click", function() {
  menuMusic.play();
  startBtn.style.display = "none";
});