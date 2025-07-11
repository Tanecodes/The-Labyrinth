// play game
function introduction() {
// removes main menu
  mainMenu.classList.add("fade-out");

  setTimeout(function() {
    storyAudio.pause();
    storyAudio.currentTime = 0;
  },100);

  mainMenu.addEventListener("transitionend", function() {
    mainMenu.remove();
  }, {once: true});

// calling intro to story context
  setTimeout(function() {

    showIntro(storyIntro.intro);

  },3000);
};

function startGame() {
  changeScene("bedroom");
};
