const HUDcontainer = document.getElementById("HUDcontainer");
const playerPortrait = document.getElementById("playerPortrait");
const playerBag = document.getElementById("playerBag");

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

