const HUDcontainer = document.getElementById("HUDcontainer");
const playerPortrait = document.getElementById("playerPortrait");
const playerBag = document.getElementById("playerBag");

const playerMenuBtn = document.getElementById("playerMenuBtn");
const playerMenuPanel = document.getElementById("playerMenuPanel");
const playerContinueBtn = document.getElementById("playerContinueBtn");

const playerPath = {
  male: "images/characters/male-portrait.png",
  female: "images/characters/female-01.png"
}

HUDcontainer.style.display = "none";

function displayHUD() {
  setTimeout(function() {
    HUDcontainer.style.display = "block";
    
    setTimeout(function() {
      HUDcontainer.style.opacity = 1;
    }, 500);
  }, 3000);
};

playerMenuBtn.addEventListener("click", function() {
  playerMenuPanel.style.display = "flex";
});

 playerContinueBtn.addEventListener("click", function() {
    playerMenuPanel.style.display = "none";
  });
