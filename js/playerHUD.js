const HUDcontainer = document.getElementById("HUDcontainer");
const playerPortrait = document.getElementById("playerPortrait");

const playerPath = {
  male: "/images/characters/male-01.png",
  female: "/images/characters/female-01.png"
}

HUDcontainer.style.display = "none";

function displayHUD() {
  HUDcontainer.style.display = "block";
};

