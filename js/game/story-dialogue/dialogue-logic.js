// logic and functions for the story dialogue.
function showDialogue(lines) {
  const container = document.createElement("div");
  container.id = "container";

  container.innerHTML = lines.join("<br>");
  setTimeout(function() {
    container.style.opacity = "1";
  }, 500);
    
  document.body.appendChild(container);

  // creating an event listener for next phase
  container.addEventListener("click", function handleClick(){
    container.removeEventListener("click", handleClick);
    container.style.opacity = "0";

    container.addEventListener("transitionend", function fadeOut() {
      container.removeEventListener("transitionend", fadeOut);
      container.remove();

      const containerTwo = document.createElement("div");
      containerTwo.id = "containerTwo";
      containerTwo.innerHTML = storyDialogue.secondIntro;

      document.body.appendChild(containerTwo);

      setTimeout(function() {
        containerTwo.style.opacity = "1";
      }, 500);

      containerTwo.addEventListener("click", function handleClickTwo() {
        containerTwo.removeEventListener("click", handleClickTwo);
        containerTwo.style.opacity = "0";

        containerTwo.addEventListener("transitionend", function fadeOutTwo() {
          containerTwo.removeEventListener("transitionend", fadeOutTwo);
          containerTwo.remove();

          selectCharacter();
          //startGame();
        });
      });
    });
  })
};



