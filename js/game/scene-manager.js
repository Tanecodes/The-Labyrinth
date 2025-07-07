
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
  initiatesHall: "images/home/initiates-hall.jpeg"    
}

const villageNpcs = {
  grannyMabel: "images/characters/granny-mabel.png"
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
        x: 510, 
        y: 170,
        width: 120,
        height: 200, 
        onClick: function() {
          villageAudio.door.play();
          changeScene("house");
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
  // home scene
  house: {
    background: backgroundPath.lounge,
    music: bedroomAudio,
    buttons: [
      {
        label: "bedroom", 
        x: 370, 
        y: 190,
        width: 200,
        height: 200, 
        onClick: function() {
          villageAudio.woodFeet.play();
          changeScene("bedroom");
        }
      },
      {
        label: "mabels room",
        x: 110,
        y: 300,
        width: 150,
        height: 400,
        onClick: function() {
          villageAudio.door.play();
          changeScene("mabelsBedroom");
        }
      },
        {
          label: "outside",
          x: 1330,
          y: 400,
          width: 150,
          height: 400,
          onClick: function() {
            villageAudio.woodFeet.play();
            changeScene("outside");
          }
        }
    ],
    npc: [
      { 
        npc: villageNpcs.grannyMabel,
        x: 600,
        y: 500,
        width: 250,
        height: 375,
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
        x: 750,
        y: 300,
        width: 150,
        height: 250,
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
        x: 700,
        y: 400,
        width: 150,
        height: 250,
        onClick: function() {
          concreteFeetAudio();
          changeScene("house");
        }
      },
      {
        label: "town center",
        x: 1210,
        y: 450,
        width: 150,
        height: 250,
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
        x: 250,
        y: 500,
        width: 150,
        height: 250,
        onClick: function() {
          concreteFeetAudio();
          changeScene("potions");
        }
      },
      {
        label: "armory",
        x: 1250,
        y: 530,
        width: 150,
        height: 250,
        onClick: function() {
          doorBellAudio();
          villageAudio.door.play();
          changeScene("armory");
        }
      },
      {
        label: "pet shop",
        x: 700,
        y: 500,
        width: 150,
        height: 250,
        onClick: function() {
          concreteFeetAudio();
          changeScene("petShop");
        }
      },
      {
        label: "return",
        x: 750,
        y: 850,
        width: 200,
        height: 150,
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
        x: 450,
        y: 450,
        width: 150,
        height: 250,
        onClick: function() {
          villageAudio.door.play();
          changeScene("townCenter");
        }
      }
    ],
    npc:[
      {
        npc: villageNpcs.grannyMabel,
        x: 600,
        y: 500,
        width: 250,
        height: 375,
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
        x: 1350,
        y: 500,
        width: 150,
        height: 250,
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
        x: 380,
        y: 600,
        width: 150,
        height: 250,
        onClick: function() {
          doorBellAudio();
          villageAudio.door.play();
          changeScene("petStore");
        }
      },
      {
        label: "the village castle",
        x: 1270,
        y: 600,
        width: 150,
        height: 250,
        onClick: function() {
          concreteFeetAudio();
          changeScene("villageCastle");
        }
      },
      {
        label: "return",
        x: 750,
        y: 850,
        width: 200,
        height: 150,
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
        x: 700,
        y: 400,
        width: 150,
        height: 250,
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
        x: 740,
        y: 500,
        width: 150,
        height: 250,
        onClick: function() {
          concreteFeetAudio();
          changeScene("initiatesHall");
        }
      },
      {
        label: "return",
        x: 750,
        y: 850,
        width: 200,
        height: 150,
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
        x: 725,
        y: 400,
        width: 150,
        height: 250,
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
      button.style.left = btn.x + "px";
      button.style.top = btn.y + "px";
      button.style.padding = "10px";
      button.style.width = btn.width + "px";
      button.style.height = btn.height + "px";
      button.addEventListener("click", btn.onClick);
    
      buttonsContainer.appendChild(button);
    });

    scene.npc?.forEach(function(npcData) {
      const npc = document.createElement("img");
      npc.src = npcData.npc;
      npc.classList.add ("npcImg");
      npc.style.position = "absolute";
      npc.style.zIndex = "10";
      npc.style.left = npcData.x + "px";
      npc.style.top = npcData.y + "px";
      npc.style.padding = "10px";
      npc.style.width = npcData.width + "px";
      npc.style.height = npcData.height + "px";
      npc.addEventListener("click", npcData.onClick);

      buttonsContainer.appendChild(npc);
    });
  }, 2000);
};



