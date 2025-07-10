const dialogueBox = document.getElementById("dialogueBox");
const portraitContainer = document.getElementById("portraitContainer");
const portrait = document.getElementById("portrait");
const dialogueText = document.getElementById("dialogueText");
const dialogueLine = document.getElementById("dialogueLine");
const skipBtn = document.getElementById("skipBtn");

// creating and storing intro dialogue
const storyIntro = {
  intro: [
    "Long ago, before time was counted, a labyrinth was carved deep into the earth",
    "Its halls shift like dreams — forged by no known hand, whispered to be alive",
    "Those who enter... rarely return",
    "No one remembers who built it, or why",
    "Only that it calls to the minds of the curious through visions, through dreams.",
  ],
  secondIntro: [
    "And now... it calls to you."
  ]
};

// logic for main intro before the bedroom scene
function showIntro(lines) {
  const introContainer = document.createElement("div");
  introContainer.id = "introContainer";

  introContainer.innerHTML = lines.join("<br>");
  setTimeout(function() {
    introContainer.style.opacity = "1";
  }, 1000);
    
  document.body.appendChild(introContainer);

  // creating an event listener for next phase
  introContainer.addEventListener("click", function handleClick(){
    introContainer.removeEventListener("click", handleClick);
    introContainer.style.opacity = "0";

    introContainer.addEventListener("transitionend", function fadeOut() {
      introContainer.removeEventListener("transitionend", fadeOut);
      introContainer.remove();

      const introContainerTwo = document.createElement("div");
      introContainerTwo.id = "introContainerTwo";
      introContainerTwo.innerHTML = storyIntro.secondIntro;

      document.body.appendChild(introContainerTwo);

      setTimeout(function() {
        introContainerTwo.style.opacity = "1";
      }, 1000);

      introContainerTwo.addEventListener("click", function handleClickTwo() {
        introContainerTwo.removeEventListener("click", handleClickTwo);
        introContainerTwo.style.opacity = "0";

        introContainerTwo.addEventListener("transitionend", function fadeOutTwo() {
          introContainerTwo.removeEventListener("transitionend", fadeOutTwo);
          introContainerTwo.remove();

          selectCharacter();
        });
      });
    });
  })
};


// npc dialogue system 
const npcDialogue = {
  grannyMabel:{
    img: villageNpcs.grannyMabel,
    lines:[
    "Oh good morning dear..",
    "did you sleep well?",
    "yay today is the day you get your labyrinth dice!",
    "how exciting!"
    ]
  },
};
// function to create dialogue window when talking to npc
// a portrait, dialogue etc...
function talkToNpc (npcName) {
  const npc = npcDialogue[npcName];
  const imgSrc = npc.img;
  const dialogueLines = npc.lines;

  const displayContainer = document.createElement("div");
  displayContainer.id = "displayContainer";
  document.body.appendChild(displayContainer);

  const createNpcPortrait = document.createElement("img");
  createNpcPortrait.id = "createNpcPortrait";
  createNpcPortrait.src = imgSrc;
  displayContainer.appendChild(createNpcPortrait);

  const displayDialogue = document.createElement("p")
  displayDialogue.id = "displayDialogue";
  displayContainer.appendChild(displayDialogue);

  createNpcPortrait.addEventListener("click", () => {
    displayContainer.style.display = "none";
  });

  let currentLines = 0;
  let isTyping = false;

   function textEffect(text, element, speed = 50) {
    let index = 0;
    element.textContent = "";
    isTyping = true;
    dialogueAudio.text.currentTime = 0;
    dialogueAudio.text.play();

    const interval = setInterval(() => {
      element.textContent += text.charAt(index);
      index++;

      if(index >= text.length) {
        clearInterval(interval);
        dialogueAudio.text.pause();
        dialogueAudio.text.currentTime = 0;
        isTyping = false;
      }
    }, speed);
  };

  function showNextLine() {
    if(isTyping) return;

    if(currentLines < dialogueLines.length) {
      textEffect(dialogueLines[currentLines], displayDialogue, 50);
      currentLines++;
    } else {
      displayContainer.style.display = "none";
    }
  };

  displayDialogue.addEventListener("click", () => {
    showNextLine();
  });

  showNextLine();
}

