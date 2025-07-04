
const sceneContainer = document.getElementById("sceneContainer");
const backgroundImg = document.getElementById("backgroundImg"); 

function setBackground(imagePath) {

  sceneContainer.style.display = "block";
  sceneContainer.style.position = "relative";

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.pointerEvents = "none";
  document.body.appendChild(overlay);

   void overlay.offsetWidth;

  overlay.style.opacity = "1";

  overlay.addEventListener("transitionend", function handleFadein() {
    if(overlay.style.opacity === "1") {
      overlay.removeEventListener("transitionend", handleFadein);

      if(sceneContainer) {
        console.log("DEBUG imagePath:", imagePath);
        backgroundImg.src = imagePath;
      } else{
        console.log("missing image path check your code");
      }
      
      overlay.style.opacity = "0";

      overlay.addEventListener("transitionend", function() {
        overlay.remove();
      });
    };
  });
};
