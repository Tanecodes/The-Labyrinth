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
  // setting text content and adding classes to the buttons
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "THE LABYRINTH"
    menuTitle.id = "menuTitle";

    const playBtn = document.createElement("button");
    playBtn.textContent = "Play";
    playBtn.classList.add("menuBtn");
    playBtn.id = "playBtn";

    const playBtnId = document.getElementById("playBtn");

    const settingsBtn = document.createElement("button");
    settingsBtn.textContent = "Settings";
    settingsBtn.classList.add("menuBtn");

    const loadBtn = document.createElement("button");
    loadBtn.textContent = "Load";
    loadBtn.classList.add("menuBtn");

    const creditsBtn = document.createElement("button");
    creditsBtn.textContent = "Credits";
    creditsBtn.classList.add("menuBtn");
      
    // appending menu buttons to main menu div.
    mainMenu.appendChild(menuTitle);
    mainMenu.appendChild(playBtn);
    mainMenu.appendChild(settingsBtn);
    mainMenu.appendChild(loadBtn);
    mainMenu.appendChild(creditsBtn);

    document.body.appendChild(mainMenu);

    // play button logic to remove main menu and start game logic woohooo
    playBtn.addEventListener("click", function() {
      mainMenu.classList.add("fade-out");

      menuMusic.pause();
      menuMusic.currentTime = 0;

      document.body.style.backgroundColor = "black";
      document.body.style.backgroundImage = "none";

      mainMenu.addEventListener("transitionend", function() {
        mainMenu.remove();
      }, {once: true});
    });
  }, 2000);    
});