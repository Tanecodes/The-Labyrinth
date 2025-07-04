

const backgroundPath = {
  bedroom: "images/home/bedroom.jpeg",
  shop: "images/home/shop.jpeg",
}

const scenes = {
  // bedroom scene
  bedroom:{
    background: backgroundPath.bedroom,
    music: bedroomAudio,
    buttons:[
      {
        label: "exit room", x: 500, y: 500, onClick: function() {
          changeScene("shop");
        }
      }
    ]
  },
  // shop scene
  shop: {
    background: backgroundPath.shop,
    music: bedroomAudio,
    buttons: [{
      label: "bedroom", 
      x: 500, 
      y: 500, 
      onClick: function() {
        changeScene("bedroom");
      }
    }]
  }
};

let currentMusic = null;

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

  const buttonsContainer = document.getElementById("buttonsContainer");
  buttonsContainer.innerHTML = '';

  scene.buttons?.forEach(function(btn) {
    const button = document.createElement("button");
    button.textContent = btn.label;
    button.style.position = "absolute";
    button.style.zIndex = "10"
    button.style.left = btn.x + "px";
    button.style.top = btn.y + "px";
    button.style.padding = "10px";
    button.addEventListener("click", btn.onClick);
    buttonsContainer.appendChild(button);
  });
};

