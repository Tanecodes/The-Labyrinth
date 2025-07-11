// creating local storage and adding it to event listeners

// saving via local storage
const playerSaveBtn = document.getElementById("playerSaveBtn");

playerSaveBtn.addEventListener("click", () => {
  if(currentSceneKey) {
    localStorage.setItem("savedScene", currentSceneKey);
    console.log("game save", currentSceneKey);
  } else {
    console.log("no scene to save");
  }
});

// load button from player hud menu
const playerLoadBtn = document.getElementById("playerLoadBtn");

playerLoadBtn.addEventListener("click", () => {
  const savedScene = localStorage.getItem("savedScene");
  if(savedScene) {
    changeScene(savedScene);
  } else {
    console.log("no game saved");
  }
});

// loading from the main menu
const loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", () => {
  const savedScene = localStorage.getItem("savedScene");
  if(savedScene) {
    changeScene(savedScene);
  } else {
    console.log("no game saved..");
  }
});