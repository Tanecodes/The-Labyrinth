// creating player inventory 
const inventoryPanel = document.getElementById("inventoryPanel");

function toggleInventory() {
  inventoryPanel.classList.toggle("hidden"); 
}

document.addEventListener("keydown", function(event) {
  if(event.key.toLowerCase() === "b") {
    toggleInventory();
  }
});
