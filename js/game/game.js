// play game
function playGame() {
// removes main menu
  mainMenu.classList.add("fade-out");

  setTimeout(function() {
    menuMusic.pause();
    menuMusic.currentTime = 0;
  },600);

  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "none";

  mainMenu.addEventListener("transitionend", function() {
    mainMenu.remove();
  }, {once: true});

// calling intro to story context
  setTimeout(function() {

    showDialogue(storyDialogue.intro);

  },3000);
};

function startGame() {

  setBackground(backgroundImg.bedroom);
}