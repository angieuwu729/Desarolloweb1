let baseSize = 100;

function setup() {
  let canvas = createCanvas(600, 300, WEBGL);
  canvas.parent('interactivoCanvas');
}

function draw() {
  background(230, 240, 255);

  let scrollY = window.scrollY;
  let windowCenter = window.innerHeight / 2;
  let canvasY = document.getElementById("interactivoCanvas").getBoundingClientRect().top + scrollY;
  let canvasCenter = canvasY + height / 2;

  let distance = abs(scrollY + windowCenter - canvasCenter);

  let scaleFactor = map(distance, 0, window.innerHeight, 200, 50);
  scaleFactor = constrain(scaleFactor, 50, 200);

  rotateY(frameCount * 0.05);
  normalMaterial();
  box(scaleFactor);
}
