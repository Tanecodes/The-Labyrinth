
const backgroundDiv = document.getElementById("background");
const backgroundImg = document.getElementById("backgroundImg"); 

function setBackground(imagePath) {

  backgroundDiv.style.display = "block";
  backgroundDiv.style.position = "absolute";

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.pointerEvents = "none";
  document.body.appendChild(overlay);

   void overlay.offsetWidth;

  overlay.style.opacity = "1";

  overlay.addEventListener("transitionend", function handleFadein() {
    if(overlay.style.opacity === "1") {
      overlay.removeEventListener("transitionend", handleFadein);

      if(backgroundDiv) {
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
