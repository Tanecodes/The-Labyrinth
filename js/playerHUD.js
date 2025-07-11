const HUDcontainer = document.getElementById("HUDcontainer");
const playerPortrait = document.getElementById("playerPortrait");
const playerBag = document.getElementById("playerBag");

const playerMenuBtn = document.getElementById("playerMenuBtn");
const playerMenuPanel = document.getElementById("playerMenuPanel");
const playerExitBtn = document.getElementById("playerExitBtn");
const playerSettingsBtn = document.getElementById("playerSettingsBtn");

const inventoryPanel = document.getElementById("inventoryPanel");
const inventoryGrid = document.getElementById("inventoryGrid");

function openBag() {
  itemAudio.bag.currentTime = 2;
  itemAudio.bag.play();

  setTimeout(() => {
    itemAudio.bag.pause();
    itemAudio.bag.currentTime = 2;
  },1500)
};

// object holding the path for player portrait images
const playerPath = {
  male: "images/characters/male-portrait.png",
  female: "images/characters/female-01.png"
}

// displaying playerHUD
function displayHUD() {
  setTimeout(function() {
    HUDcontainer.style.display = "block";
    
    const gender = localStorage.getItem("playerGender");
    if(gender) {
      playerPortrait.src = playerPath[gender];
    }

    setTimeout(function() {
      HUDcontainer.style.opacity = 1;
    }, 300);
  }, 2000);
};

// creating dynamic inventory grid
const totalSlots = 24;

for(let i = 0; i < totalSlots; i++) {
  const slot = document.createElement("div");

  slot.classList.add("inventorySlot");
  inventoryGrid.appendChild(slot);
};

// player menu panel logic
// event listeners to open and close player menu panel.
playerMenuBtn.addEventListener("click", () => {
  playerMenuPanel.style.display = "flex";
  playerMenuPanel.style.opacity = 1;
  playerMenuPanel.style.pointerEvents = "auto";
});

 playerExitBtn.addEventListener("click", () => {
    playerMenuPanel.style.display = "none";
    playerMenuPanel.style.opacity = 0;
    playerMenuPanel.style.pointerEvents = "none";
  });

  playerSettingsBtn.addEventListener("click", ()=> {
    settingsModal.style.display = "flex";
    settingsModal.style.zIndex = 25;
  });

  playerBag.addEventListener("click", () => {
    inventoryPanel.classList.toggle("hidden");
    openBag();
  });


