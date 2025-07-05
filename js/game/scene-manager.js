
// footsteps and door sound effects
const footStepsPath = {
  feet: new Audio("audio/character/running-wood.mp3"),
  door: new Audio("audio/character/wood-door.mp3"),
  snoring: new Audio("audio/character/snoring.mp3"),
};

const backgroundPath = {
  bedroom: "images/home/bedroom.jpeg",
  shop: "images/home/shop.jpeg",
}

const villageNpcs = {
  grannyMabel: "images/characters/granny-mabel.png",
}

function sleepOverlay() {

  const overlay = document.createElement("div");
  overlay.id = "sleepOverlay";
  overlay.style.pointerEvents = "none";
  document.body.appendChild(overlay);

   void overlay.offsetWidth;

    overlay.style.opacity = "1";

    setTimeout(function() {
      bedroomAudio.pause();
      footStepsPath.snoring.play();
    }, 200);

    const sleeping = document.createElement("p");
    sleeping.id = "sleepingText";
    sleeping.textContent = "zZzZz..Zz..";
    overlay.appendChild(sleeping);
    
    overlay.addEventListener("transitionend", function handleFadein() {
      if(overlay.style.opacity === "1") {
        overlay.removeEventListener("transitionend", handleFadein);
      
        overlay.style.opacity = "0";

        overlay.addEventListener("transitionend", function() {
          bedroomAudio.play();
          footStepsPath.snoring.pause();
          footStepsPath.snoring.currentTime = 0;
          overlay.remove();
      });
    };
  });
}

// change scene object that stores scenes
const scenes = {
  //bedroom scene
  bedroom:{
    background: backgroundPath.bedroom,
    music: bedroomAudio,
    buttons:[
      {
        label: "exit room",
        x: 510, 
        y: 170,
        width: 120,
        height: 200, 
        onClick: function() {
          footStepsPath.door.play();
          changeScene("shop");
        }
      },

      {
        label: "sleep",
        x: 210, 
        y: 440,
        width: 150,
        height: 200,
        onClick : function() {
          sleepOverlay();
        }
      }
    ]
  },
  // shop scene
  shop: {
    background: backgroundPath.shop,
    music: bedroomAudio,
    buttons: [
      {
        label: "bedroom", 
        x: 1210, 
        y: 200,
        width: 200,
        height: 200, 
        onClick: function() {
          footStepsPath.feet.play();
          changeScene("bedroom");
        }
      },
      {
        npc: villageNpcs.grannyMabel,
        x: 870,
        y: 537,
        width: 300,
        height: 350,
        onClick: function() {

        }
      }
    ]
  }
};

// had an issue with background music so set currentMusic to null wich fixed it.
let currentMusic = null;

// function that changes scene/background music
function changeScene(sceneName) {
  const scene = scenes[sceneName];

  if(!scene) {
    console.error(`Scene "${sceneName}" does not exist`);
    return;
  }

  setBackground(scene.background);

  if(currentMusic && currentMusic !== scene.music) {
    currentMusic.pause();
    currentMusic.currentTime = 0
  }

  if(scene.music && scene.music !== currentMusic) {
    scene.music.loop = true;
    scene.music.play();
    currentMusic = scene.music;
  }

  // this code block is for creating dynamic buttons for each scene
  // to interact for example door button goes to next scene
 
  document.querySelector("#buttonsContainer").addEventListener("click", function(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log("position:", x, y);
  });

    const buttonsContainer = document.getElementById("buttonsContainer");

    setTimeout(function() {
      buttonsContainer.innerHTML = '';
    },2000);
    

    // creating dynamic buttons and npcs 
    setTimeout(function() {
      scene.buttons?.forEach(function(btn) {
    const button = document.createElement("button");
    button.classList.add("sceneBtns");
    button.textContent = btn.label;
    button.style.position = "absolute";
    button.style.zIndex = "10"
    button.style.left = btn.x + "px";
    button.style.top = btn.y + "px";
    button.style.padding = "10px";
    button.style.width = btn.width + "px";
    button.style.height = btn.height + "px";
    button.addEventListener("click", btn.onClick);

    if(btn.npc) {
      const npcImg = document.createElement("img");
      npcImg.id = "npcImg";
      npcImg.src = btn.npc;
      npcImg.style.width = btn.width + "px";
      npcImg.style.height = btn.height + "px";
      npcImg.style.top = btn.x + "px";
      npcImg.style.left = btn.y + "px";
      button.appendChild(npcImg);
    }
    
    buttonsContainer.appendChild(button);
  });
    }, 2000);
};



