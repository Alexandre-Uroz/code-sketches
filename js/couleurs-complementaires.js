let selectedHue = 0;

let cx, cy;
let wheelRadius = 180;

function setup() {
  createCanvas(600, 600);

  colorMode(HSB, 360, 100, 100);

  cx = width / 2;
  cy = 260;
}

function draw() {
  background(95);

  drawColorWheel();

  // Interaction
  if (mouseIsPressed) {

    let d = dist(mouseX, mouseY, cx, cy);

    if (d < wheelRadius + 30) {

      let angle = degrees(
        atan2(mouseY - cy, mouseX - cx)
      );

      if (angle < 0) angle += 360;

      selectedHue = angle;
    }
  }

  let complement = (selectedHue + 180) % 360;

  let split1 = (complement - 30 + 360) % 360;
  let split2 = (complement + 30) % 360;

  drawMarker(selectedHue, 22);
  drawMarker(split1, 22);
  drawMarker(split2, 22);

  drawSwatches(selectedHue, split1, split2);
}

function drawColorWheel() {

  noStroke();

  for (let angle = 0; angle < 360; angle++) {

    fill(angle, 100, 100);

    arc(
      cx,
      cy,
      wheelRadius * 2,
      wheelRadius * 2,
      radians(angle),
      radians(angle + 2)
    );
  }

  // centre blanc pour un rendu plus doux
  fill(0, 0, 100);

  circle(
    cx,
    cy,
    wheelRadius * 0.45
  );
}

function drawMarker(hueValue, size) {

  let x =
    cx +
    wheelRadius *
      cos(radians(hueValue));

  let y =
    cy +
    wheelRadius *
      sin(radians(hueValue));

  stroke(0);
  strokeWeight(4);

  fill(hueValue, 100, 100);

  circle(x, y, size * 2);
}

function drawSwatches(base, split1, split2) {

  let y = 540;

  noStroke();

  fill(base, 100, 100);
  rect(100, 470, 100, 50, 10);

  fill(split1, 100, 100);
  rect(250, 470, 100, 50, 10);

  fill(split2, 100, 100);
  rect(400, 470, 100, 50, 10);

  fill(0);

  textAlign(CENTER);
  textSize(16);

  text("Base", 120, y);
  text("Split 1", 270, y);
  text("Split 2", 420, y);

  text(round(base) + "°", 180, y);
  text(round(split1) + "°", 330, y);
  text(round(split2) + "°", 480, y);
}