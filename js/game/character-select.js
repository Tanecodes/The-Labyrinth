const playerPortraits = [

  {
    imgPath: "images/characters/mage2.png"
  },
  {
    imgPath: "images/characters/ranger1.png"
  },
  {
    imgPath: "images/characters/adventurer2.png"
  }

];

function selectCharacter() {

  const text = document.createElement("p");
  text.id = "selectText";
  text.textContent = "select a portrait";

  setTimeout(function() {
    document.body.appendChild(text);
  }, 600);
  
  const portraitsWrapper = document.createElement("div");
  portraitsWrapper.id = "portraitsWrapper";

  setTimeout(function() {
    document.body.appendChild(portraitsWrapper);
  }, 600);

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



 

