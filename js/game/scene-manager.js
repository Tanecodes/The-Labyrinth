const scenes = {
  bedroom:{
    background: backgroundImg.bedroom,
    music: "audio",
  },
  shop: {
    background: backgroundImg.shop,
    music: "audio",
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