
const playerPortraits = [
  {
    male: "images/characters/male-portrait.png"
  },
  
  {
    female: "images/characters/female-01.png"
  }
];

function selectCharacter() {

  const text = document.createElement("p");
  text.id = "selectText";
  text.textContent = "select a gender";

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
    img.classList.add("playerImg");
    
    const imageSrc = Object.values(character)[0];
    const gender = Object.keys(character)[0];
    img.src = imageSrc;  

    portraitsWrapper.appendChild(img);

    img.addEventListener("click", function clickHandler() {

      if(gender === "male") {
        btnAudio.play();
        btnAudio.currentTime = 0;

        text.remove();
        portraitsWrapper.remove();

        playerPortrait.src = playerPath.male;
        startGame();
      } else if (gender === "female") {
        btnAudio.play();
        btnAudio.currentTime = 0;

        text.remove();
        portraitsWrapper.remove();

        playerPortrait.src = playerPath.female;
        startGame();
      };
    });
  });
};



 

