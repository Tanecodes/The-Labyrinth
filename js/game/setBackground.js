
const backgroundImg = {
  bedroom: "images/home/bedroom.jpeg",
  shop: "images/home/shop.jpeg",
}

const backgroundDiv = document.getElementById("background");
const backgroundImage = document.getElementById("backgroundImg");

function setBackground(imagePath) {

  backgroundDiv.style.display = "flex";

  const overlay = document.createElement("div");
  overlay.id = "overlay";

  document.body.appendChild(overlay);

   void overlay.offsetWidth;

  overlay.style.opacity = "1";

  overlay.addEventListener("transitionend", function handleFadein() {
    if(overlay.style.opacity === "1") {
      overlay.removeEventListener("transitionend", handleFadein);

      if(backgroundDiv) {
        backgroundImage.src = imagePath;
      }
      
      overlay.style.opacity = "0";

      overlay.addEventListener("transitionend", function() {
        overlay.remove();
      });
    };
  });
};
