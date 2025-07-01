const playerPortraits = [
  {
    imgPath: "images/characters/mage1.png",
  }
];

function selectCharacter() {
  const portraitsWrapper = document.createElement("div");
  portraitsWrapper.id = "portraitsWrapper";
  document.body.appendChild(portraitsWrapper);

  playerPortraits.forEach( character => {
    const img = document.createElement("img");
    img.src = character.imgPath;
    img.classList.add("playerImg");
    
    portraitsWrapper.appendChild(img);
  });

};

selectCharacter();