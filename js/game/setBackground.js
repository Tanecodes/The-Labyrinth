
const backgroundImg = {
  bedroom: "images/home/mybedroom.png",
  mainMenu: "images/main-menu/labrynth-background-image.png",
}

function setBackground(imagePath) {
  const overlay = document.createElement("div");
  overlay.id = "overlay";

  document.body.appendChild(overlay);

   void overlay.offsetWidth;

  overlay.style.opacity = "1";

  overlay.addEventListener("transitionend", function handleFadein() {
    if(overlay.style.opacity === "1") {
      overlay.removeEventListener("transitionend", handleFadein);
      
      document.body.style.backgroundImage = `url('${imagePath}')`;
      overlay.style.opacity = "0";

      overlay.addEventListener("transitionend", function() {
        overlay.remove();
      });

    }
  });
}