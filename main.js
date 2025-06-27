// creating some main variables
const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");

// menu music
const menuMusic = document.getElementById("menuMusic");
menuMusic.volume = 0.2;

// button click audio
const btnAudio = document.getElementById("btnAudio");
btnAudio.volume = 0.07;

// button hover audio (unfinished).
const hoverAudio = document.getElementById("hoverAudio");
hoverAudio.volume = 0.5;

// start button event listener
startBtn.addEventListener("click", function() {
  btnAudio.play();

  startMenu.classList.add("fade-out");

  setTimeout(function() {
    startMenu.style.display = "none";
  }, 2000);

  setTimeout(function() {
    menuMusic.play();
  }, 1500);

  // creating dynamic main menu elements (div wrapper, buttons etc..)
  const mainMenu = document.createElement("div");
  mainMenu.id = "mainMenu";

  setTimeout(function() {

      const beginBtn = document.createElement("button");
      const settingsBtn = document.createElement("button");
      const loadBtn = document.createElement("button");
      const creditsBtn = document.createElement("button");

      // setting text content and adding classes to the buttons
      beginBtn.textContent = "Begin Adventure";
      beginBtn.classList.add("menuBtn");

      settingsBtn.textContent = "Settings";
      settingsBtn.classList.add("menuBtn");

      loadBtn.textContent = "Load";
      loadBtn.classList.add("menuBtn");

      creditsBtn.textContent = "Credits";
      creditsBtn.classList.add("menuBtn");

      // appending menu buttons to main menu div.
      mainMenu.appendChild(beginBtn);
      mainMenu.appendChild(settingsBtn);
      mainMenu.appendChild(loadBtn);
      mainMenu.appendChild(creditsBtn);

      document.body.appendChild(mainMenu);

      const menuBtns = document.querySelectorAll(".menuBtn");
      menuBtns.forEach(function(buttons) {
        buttons.addEventListener("mouseenter", function() {
          hoverAudio.play();
          hoverAudio.currentTime = 0;
        });

        buttons.addEventListener("click", function() {
          btnAudio.play();
          btnAudio.currentTime = 0;
        });
      });
    }, 2000);
});


