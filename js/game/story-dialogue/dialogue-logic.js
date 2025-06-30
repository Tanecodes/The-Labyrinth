// logic and functions for the story dialogue.
function showDialogue(lines) {
  const container = document.createElement("div");
  container.id = "container";
  container.textContent = lines;

  document.body.appendChild(container);
};