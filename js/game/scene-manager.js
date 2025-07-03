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

function changeScene(sceneName) {
  const scene = scenes[sceneName];

  if(!scene) {
    console.error(`Scene "${sceneName}" does not exist`);
    return;
  }

  setBackground(scene.background);
};