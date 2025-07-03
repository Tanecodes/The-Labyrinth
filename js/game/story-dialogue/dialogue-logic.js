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

const dialogueBox = document.getElementById("dialogueBox");
const portraitContainer = document.getElementById("portraitContainer");
const portrait = document.getElementById("portrait");
const dialogueText = document.getElementById("dialogueText");
const dialogueLine = document.getElementById("dialogueLine");
const skipBtn = document.getElementById("skipBtn");

function showDialogue(index) {
  if(index >= dialogueLines.length) {
    dialogueLine.classList.add("hidden");
    return
  }

  dialogueBox.style.display = "flex";
  const line = dialogueLines[index];
  portrait.src = line.portrait;
  dialogueLine.textContent = line.text;
  dialogueLine.classList.remove("hidden");

}

let currentLineIndex = 0;

function nextLine() {
  currentLineIndex++;
  showDialogue(currentLineIndex);
}

