// battle scene logic and battle mechanics
// this function is gonna hold most if not all things to do with the battle mechanics

function setBattleBackground(imagePath) {
  sceneContainer.style.display = "block";
  sceneContainer.style.position = "relative";

  const battleOverlay = document.createElement("div");
  battleOverlay.id = "battleOverlay";
  battleOverlay.style.pointerEvents = "none";
  document.body.appendChild(battleOverlay);

  void battleOverlay.offsetWidth;

  battleOverlay.style.opacity = "1";
};

function startFight () {
  // grabbing normal HUD and hiding it
  const normalHud = document.getElementById("HUDcontainer");
  normalHud.style.display = "none";
  
  



  normalHud.style.display = "block";
}