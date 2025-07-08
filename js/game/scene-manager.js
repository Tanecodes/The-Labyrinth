
// footsteps and door sound effects
const villageAudio = {
  woodFeet: new Audio("audio/character/running-wood.mp3"),
  concreteFeet: new Audio("audio/character/footsteps-concrete.mp3"),
  door: new Audio("audio/character/wood-door.mp3"),
  doorBell: new Audio("audio/character/door-bell.mp3"),
  snoring: new Audio("audio/character/snoring.mp3")
};

villageAudio.door.currentTime = 0.5;

const backgroundPath = {
  bedroom: "images/home/bedroom.jpeg",
  lounge: "images/home/granny-mabels.jpeg",
  mabelsRoom: "images/home/mabels-cozy-room.jpeg",
  outside: "images/home/outside-mabels.jpeg",
  town: "images/home/potion-armory.jpeg",
  petShop: "images/home/village-pet-shop.jpeg",
  petStore: "images/home/village-pet-store.jpeg",
  armory: "images/home/village-armory.jpeg",
  potionShop: "images/home/village-potion-shop.jpeg",
  labyrinthHall: "images/home/labyrinth-hall.jpeg",
  initiatesHall: "images/home/initiates-hall.jpeg",    
}

const villageNpcs = {
  grannyMabel: "images/characters/granny-mabel.png",
}

function concreteFeetAudio() {
  villageAudio.concreteFeet.currentTime = 0;
  villageAudio.concreteFeet.play();

  setTimeout(function() {
   villageAudio.concreteFeet.pause();
   villageAudio.concreteFeet.currentTime = 0;  
  }, 2200);
};

function doorBellAudio() {
  villageAudio.doorBell.currentTime = 0;
  villageAudio.doorBell.play();

  setTimeout(function() {
    villageAudio.doorBell.pause();
    villageAudio.doorBell.currentTime = 0;
  }, 2900);
};

function logRelativePos(event) {
  const container = document.getElementById("sceneContainer");
  const rect = container.getBoundingClientRect();

  const relativeX =  ((event.clientX - rect.left) / rect.width) * 100;
  const relativeY = ((event.clientY - rect.top) / rect.height) * 100;

  console.log(`X: ${relativeX.toFixed(2)}% Y: ${relativeY.toFixed(2)}%`);
};

document.getElementById("sceneContainer").addEventListener("click", logRelativePos);


function sleepOverlay() {

  const overlay = document.createElement("div");
  overlay.id = "sleepOverlay";
  overlay.style.pointerEvents = "none";
  document.body.appendChild(overlay);

   void overlay.offsetWidth;

    overlay.style.opacity = "1";

    setTimeout(function() {
      bedroomAudio.pause();
      villageAudio.snoring.play();
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
          villageAudio.snoring.pause();
          villageAudio.snoring.currentTime = 0;
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
        x: 33.9, 
        y: 15.85,
        width: 9,
        height: 21, 
        onClick: function() {
          villageAudio.door.play();
          changeScene("house");
        }
      },

      {
        label: "sleep",
        x: 18.23, 
        y: 47.95,
        width: 10,
        height: 21,
        onClick : function() {
          sleepOverlay();
        }
      }
    ]
  },
  // home scene
  house: {
    background: backgroundPath.lounge,
    music: bedroomAudio,
    buttons: [
      {
        label: "bedroom", 
        x: 22, 
        y: 19,
        width: 17,
        height: 20, 
        onClick: function() {
          villageAudio.woodFeet.play();
          changeScene("bedroom");
        }
      },
      {
        label: "mabels room",
        x: 13,
        y: 44,
        width: 9,
        height: 24,
        onClick: function() {
          villageAudio.door.play();
          changeScene("mabelsBedroom");
        }
      },
        {
          label: "outside",
          x: 76,
          y: 48,
          width: 11,
          height: 22,
          onClick: function() {
            villageAudio.woodFeet.play();
            changeScene("outside");
          }
        }
    ],
    npc: [
      { 
        npc: villageNpcs.grannyMabel,
        x: 40,
        y: 54,
        width: 13,
        height: 30,
        onClick: function() {

        }
      }]
  },
  mabelsBedroom:{
    background: backgroundPath.mabelsRoom,
    music: bedroomAudio,
    buttons: [
      {
        label: "exit room",
        x: 47,
        y: 30,
        width: 10,
        height: 30,
        onClick: function() {
          villageAudio.door.play();
          changeScene("house");
        }
      }
    ]
  },
  outside:{
    background: backgroundPath.outside,
    music: bedroomAudio,
    buttons: [
      {
        label: "granny mabels",
        x: 41,
        y: 39,
        width: 13,
        height: 29,
        onClick: function() {
          concreteFeetAudio();
          changeScene("house");
        }
      },
      {
        label: "town center",
        x: 71,
        y: 53,
        width: 12,
        height: 12,
        onClick: function() {
          concreteFeetAudio();
          changeScene("townCenter");
        }
      }
    ]
  },
  townCenter:{
    background: backgroundPath.town,
    music: bedroomAudio,
    buttons: [
      {
        label: "potions",
        x: 14,
        y: 51,
        width: 20,
        height: 20,
        onClick: function() {
          concreteFeetAudio();
          changeScene("potions");
        }
      },
      {
        label: "armory",
        x: 73,
        y: 57,
        width: 10,
        height: 21,
        onClick: function() {
          doorBellAudio();
          villageAudio.door.play();
          changeScene("armory");
        }
      },
      {
        label: "pet shop",
        x: 45,
        y: 59,
        width: 10,
        height: 20,
        onClick: function() {
          concreteFeetAudio();
          changeScene("petShop");
        }
      },
      {
        label: "return",
        x: 41,
        y: 89,
        width: 15,
        height: 10,
        onClick: function() {
          concreteFeetAudio();
          changeScene("outside");
        }
      }
    ]
  },
  armory:{
    background: backgroundPath.armory,
    music: bedroomAudio,
    buttons:[
      {
        label: "leave",
        x: 30,
        y: 52,
        width: 10,
        height: 20,
        onClick: function() {
          villageAudio.door.play();
          changeScene("townCenter");
        }
      }
    ],
    npc:[
      {
        npc: villageNpcs.grannyMabel,
        x: 50,
        y: 58,
        width: 16,
        height: 37,
        onClick: function() {
          
        }
      }
    ]
  },
  potions:{
    background: backgroundPath.potionShop,
    music: bedroomAudio,
    buttons:[
      {
        label: "leave",
        x: 78,
        y: 55,
        width: 12,
        height: 23,
        onClick: function() {
          concreteFeetAudio();
          changeScene("townCenter");
        }
      }
    ]
  },
  petShop:{
    background: backgroundPath.petShop,
    music: bedroomAudio,
    buttons:[
      {
        label: "pet store",
        x: 26,
        y: 60,
        width: 10,
        height: 20,
        onClick: function() {
          doorBellAudio();
          villageAudio.door.play();
          changeScene("petStore");
        }
      },
      {
        label: "the village castle",
        x: 74,
        y: 65,
        width: 10,
        height: 20,
        onClick: function() {
          concreteFeetAudio();
          changeScene("villageCastle");
        }
      },
      {
        label: "return",
        x: 41,
        y: 89,
        width: 15,
        height: 10,
        onClick: function() {
          concreteFeetAudio();
          changeScene("townCenter");
        }
      }
    ]
  },
  petStore: {
    background: backgroundPath.petStore,
    music: bedroomAudio,
    buttons: [
      {
        label: "leave",
        x: 44,
        y: 37,
        width: 10,
        height: 25,
        onClick: function() {
          villageAudio.woodFeet.play();
          changeScene("petShop");
        }
      }
    ]
  },
  villageCastle: {
    background: backgroundPath.labyrinthHall,
    music: bedroomAudio,
    buttons:[
      {
        label: "initiates hall",
        x: 45,
        y: 53,
        width: 10,
        height: 20,
        onClick: function() {
          concreteFeetAudio();
          changeScene("initiatesHall");
        }
      },
      {
        label: "return",
        x: 41,
        y: 89,
        width: 15,
        height: 10,
        onClick: function() {
          concreteFeetAudio();
          changeScene("petShop");
        }
      }
    ]
  },
  initiatesHall:{
    background: backgroundPath.initiatesHall,
    music: storyAudio,
    buttons: [
      {
        label: "leave",
        x: 45,
        y: 43,
        width: 10,
        height: 20,
        onClick: function() {
          villageAudio.door.play();
          changeScene("villageCastle");
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
      button.style.left = btn.x + "%";
      button.style.top = btn.y + "%";
      button.style.padding = "10px";
      button.style.width = btn.width + "%";
      button.style.height = btn.height + "%";
      button.addEventListener("click", btn.onClick);
    
      buttonsContainer.appendChild(button);
    });

    scene.npc?.forEach(function(npcData) {
      const npc = document.createElement("img");
      npc.src = npcData.npc;
      npc.classList.add ("npcImg");
      npc.style.position = "absolute";
      npc.style.zIndex = "10";
      npc.style.left = npcData.x + "%";
      npc.style.top = npcData.y + "%";
      npc.style.padding = "1px";
      npc.style.width = npcData.width + "%";
      npc.style.height = npcData.height + "%";
      npc.addEventListener("click", npcData.onClick);

      buttonsContainer.appendChild(npc);
    });
  }, 2000);
};



