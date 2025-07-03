const backgroundPath = {
  bedroom: "images/home/bedroom.jpeg",
  shop: "images/home/shop.jpeg",
}

const scenes = {
  bedroom:{
    background: backgroundPath.bedroom,
    music: bedroomAudio,
  },
  shop: {
    background: backgroundPath.shop,
    music: bedroomAudio,
  },
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
    currentMusic.currenTime = 0
  }

  if(scene.music && scene.music !== currentMusic) {
    scene.music.loop = true;
    scene.music.play();
    currentMusic = scene.music;
  }
};