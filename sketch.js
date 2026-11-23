let circleSize = 50;
let growSpeed = 2;
let isPaused = false;
let redValue = 100;
let blueValue = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (isPaused == false) {
    circleSize = circleSize + growSpeed;

    if (circleSize >= 300 || circleSize <= 30) {
      growSpeed = growSpeed * -1;
    }

    redValue = circleSize;
    blueValue = 300 - circleSize;
  }

  fill(redValue, 120, blueValue);
  ellipse(200, 200, circleSize, circleSize);

  fill(0);
  textSize(14);
  text("Click mouse to Pause / Resume", 15, 25);
}

function mousePressed() {
  if (isPaused == false) {
    isPaused = true;
  } else {
    isPaused = false;
  }
}
