const HUDcontainer = document.getElementById("HUDcontainer");
const playerPortrait = document.getElementById("playerPortrait");
const playerBag = document.getElementById("playerBag");

const playerMenuBtn = document.getElementById("playerMenuBtn");
const playerMenuPanel = document.getElementById("playerMenuPanel");
const playerContinueBtn = document.getElementById("playerContinueBtn");
const playerSettingsBtn = document.getElementById("playerSettingsBtn");

// object holding the path for player portrait images
const playerPath = {
  male: "images/characters/male-portrait.png",
  female: "images/characters/female-01.png"
}

// displaying playerHUD
function displayHUD() {
  setTimeout(function() {
    HUDcontainer.style.display = "block";
    
    setTimeout(function() {
      HUDcontainer.style.opacity = 1;
    }, 500);
  }, 3000);
};

// player menu panel logic
// event listeners to open and close player menu panel.
playerMenuBtn.addEventListener("click", () => {
  playerMenuPanel.style.display = "flex";
  playerMenuPanel.style.opacity = 1;
});

 playerContinueBtn.addEventListener("click", () => {
    playerMenuPanel.style.display = "none";
    playerMenuPanel.style.opacity = 0;
  });

  playerSettingsBtn.addEventListener("click", ()=> {
    settingsModal.style.display = "flex";
    settingsModal.style.zIndex = 11;
    playerMenuPanel.style.display = "none";
  });


