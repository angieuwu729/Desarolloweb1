const draggables = document.querySelectorAll(".draggable");

draggables.forEach(elem => {
  elem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
});
