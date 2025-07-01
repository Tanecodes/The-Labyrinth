const playerPortraits = [
  {
    imgPath: "images/characters/mage1.png"
  },
  {
    imgPath: "images/characters/mage2.png"
  }
];

function selectCharacter() {

  const text = document.createElement("p");
  text.id = "selectText";
  text.textContent = "select a portrait";
  document.body.appendChild(text);

  const portraitsWrapper = document.createElement("div");
  portraitsWrapper.id = "portraitsWrapper";
  document.body.appendChild(portraitsWrapper);

  playerPortraits.forEach( character => {
    const img = document.createElement("img");
    img.src = character.imgPath;
    img.classList.add("playerImg");

    portraitsWrapper.appendChild(img);

    img.addEventListener("click", function clickHandler() {
      btnAudio.play();
      btnAudio.currentTime = 0;

      text.remove();
      portraitsWrapper.remove();
      startGame();
    });
  });
};



 

