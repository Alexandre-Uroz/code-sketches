let sunHeight = 600;
let horizon = 200;

let stars = [];

function setup() {
  createCanvas(600, 400);

  // création des étoiles
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(horizon),
      size: random(1, 4)
    });
  }
}

function draw() {

  sunHeight = mouseY;

  //-----------------------------------
  // COULEURS DU CIEL
  //-----------------------------------

  let dayColor = color(135, 206, 235);   // bleu ciel
  let sunsetColor = color(255, 140, 80); // orange coucher
  let nightColor = color(10, 10, 40);    // nuit

  let skyColor;

  // Soleil en haut → bleu → orange
  if (sunHeight < horizon) {

    let t = map(sunHeight, 0, horizon, 0, 1);

    skyColor = lerpColor(dayColor, sunsetColor, t);

  }
  // Soleil sous horizon → orange → nuit
  else {

    let t = map(sunHeight, horizon, height, 0, 1);

    skyColor = lerpColor(sunsetColor, nightColor, t);
  }

  background(skyColor);

  //-----------------------------------
  // ÉTOILES
  //-----------------------------------

  // apparition progressive des étoiles
  let starAlpha = map(sunHeight, horizon, height, 0, 255);

  starAlpha = constrain(starAlpha, 0, 255);

  noStroke();

  for (let star of stars) {

    fill(255, 255, 255, starAlpha);

    circle(star.x, star.y, star.size);
  }

  //-----------------------------------
  // SOLEIL
  //-----------------------------------

  // couleur du soleil qui rougit au coucher
  let sunColor = lerpColor(
    color(255, 255, 100),
    color(255, 120, 80),
    map(sunHeight, 0, height, 0, 1)
  );

  fill(sunColor);

  circle(300, sunHeight, 100);

  //-----------------------------------
  // HORIZON
  //-----------------------------------

  stroke("teal");
  line(0, horizon, width, horizon);

  //-----------------------------------
  // SOL
  //-----------------------------------

  noStroke();
  fill("teal");
  rect(0, horizon, width, height - horizon);
}