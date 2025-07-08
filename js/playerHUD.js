const HUDcontainer = document.getElementById("HUDcontainer");
const playerPortrait = document.getElementById("playerPortrait");
const playerBag = document.getElementById("playerBag");

const playerMenuBtn = document.getElementById("playerMenuBtn");
const playerMenuPanel = document.getElementById("playerMenuPanel");
const playerContinueBtn = document.getElementById("playerContinueBtn");

// object holding the path for player portrait images
const playerPath = {
  male: "images/characters/male-portrait.png",
  female: "images/characters/female-01.png"
}

HUDcontainer.style.display = "none";

// displaying playerHUD
function displayHUD() {
  setTimeout(function() {
    HUDcontainer.style.display = "block";
    
    setTimeout(function() {
      HUDcontainer.style.opacity = 1;
    }, 500);
  }, 3000);
};

// event listeners to open and close player menu panel.
playerMenuBtn.addEventListener("click", function() {
  playerMenuPanel.style.display = "flex";
});

 playerContinueBtn.addEventListener("click", function() {
    playerMenuPanel.style.display = "none";
  });
