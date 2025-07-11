
// a function commented out to find positions in game for npcs
// function logRelativePos(event) {
//   const container = document.getElementById("sceneContainer");
//   const rect = container.getBoundingClientRect();

//   const relativeX =  ((event.clientX - rect.left) / rect.width) * 100;
//   const relativeY = ((event.clientY - rect.top) / rect.height) * 100;

//   console.log(`X: ${relativeX.toFixed(2)}% Y: ${relativeY.toFixed(2)}%`);
// };

// document.getElementById("sceneContainer").addEventListener("click", logRelativePos);


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
          talkToNpc("grannyMabel");
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
    ],
    npc: [
      {
        npc: villageNpcs.sleepingCat,
        x: 28,
        y: 52,
        width: 14,
        height: 21,
        onClick: function() {

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
        npc: villageNpcs.bruno,
        x: 42,
        y: 46,
        width: 20,
        height: 49,
        onClick: function() {
          talkToNpc("bruno");
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
    ],
    npc:[
      {
        npc: villageNpcs.potionSeller,
        x: 45,
        y: 49,
        width: 23,
        height: 50,
        onClick: function() {
          talkToNpc("potionSeller")
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
    ],
    npc:[
      {
        npc: villageNpcs.petSeller,
        x: 22,
        y: 40,
        width: 20,
        height: 47,
        onClick: function() {
          talkToNpc("petSeller");
        }
      },
      {
        npc: battlePets.blueDragon,
        x: 56,
        y: 60,
        width: 17,
        height: 27,
        onClick: function() {

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
    ],
    npc: [
      {
        npc:villageNpcs.initiatesMaster,
        x: 58,
        y: 47,
        width: 19,
        height: 48,
        onClick: function() {
          talkToNpc("initiatesMaster");
        }
      }
    ]
  }
};

// had an issue with background music so set currentMusic to null which fixed it.
let currentMusic = null;
let currentSceneKey = null;
// function that changes scene/background music
function changeScene(sceneName) {
  const scene = scenes[sceneName];

  // saving current scene in a variable to save and load
  currentSceneKey = sceneName;
  document.body.style.background = "none";
  document.body.style.backgroundColor = "black";
  displayHUD();

  if(!scene) {
    console.error(`Scene "${sceneName}" does not exist`);
    return;
  }

  setBackground(scene.background);

  if (typeof storyAudio !== "undefined") {
    storyAudio.pause();
    storyAudio.currentTime = 0;
  }

  if(currentMusic && currentMusic !== scene.music) {
    currentMusic.pause();
    currentMusic.currentTime = 0
  }

  if(scene.music && scene.music !== currentMusic) {
    scene.music.loop = true;
    currentMusic = scene.music;
  }

  if(currentMusic.paused) {
    scene.music.play();
  }

  // this code block is for creating dynamic buttons and npcs for each scene
  // to interact for example door button goes to next scene
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
      button.style.padding = "5px";
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
      npc.style.zIndex = "5";
      npc.style.left = npcData.x + "%";
      npc.style.top = npcData.y + "%";
      npc.style.padding = "0";
      npc.style.width = npcData.width + "%";
      npc.style.height = npcData.height + "%";
      npc.addEventListener("click", npcData.onClick);

      buttonsContainer.appendChild(npc);
    });
  }, 2000);
};



