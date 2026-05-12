let skyTop, skyBottom;
let groundTop, groundBottom;

function setup() {
  createCanvas(600, 350);
  noLoop();
  
  skyTop = color(120, 170, 220);
  skyBottom = color(235, 245, 255);
  
  groundTop = color(160, 210, 150);
  groundBottom = color(70, 120, 60);
}

function draw() {
  drawSky();
  drawSunGlow();
  drawMountainsBack();
  drawMountainsFront();
  drawGround();
  drawClouds();
}

// --------------------
// 🌤 CIEL DÉGRADÉ DOUX
// --------------------

function drawSky(){
  for(let y = 0; y < height; y++){
    let n = map(y, 0, height, 0, 1);
    let newColor = lerpColor(skyTop, skyBottom, pow(n, 1.5));
    stroke(newColor);
    line(0, y, width, y);
  }
}

// --------------------
// ☀️ LUEUR DU SOLEIL
// --------------------

function drawSunGlow(){
  let x = width * 0.85;
  let y = height * 0.25;
  
  let gradient = drawingContext.createRadialGradient(
    x, y, 10,
    x, y, 120
  );
  
  gradient.addColorStop(0, "rgba(255,255,240,0.8)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  
  drawingContext.fillStyle = gradient;
  noStroke();
  ellipse(x, y, 240);
}

// --------------------
// ⛰ MONTAGNES LOINTAINES
// --------------------

function drawMountainsBack(){
  noStroke();
  fill(180, 200, 220, 180);
  
  beginShape();
  vertex(0, height/2 + 20);
  
  for(let x = 0; x <= width; x += 10){
    let y = height/2 + 20 - noise(x * 0.01) * 60;
    vertex(x, y);
  }
  
  vertex(width, height/2 + 20);
  endShape(CLOSE);
}

// --------------------
// ⛰ MONTAGNES AVANT
// --------------------

function drawMountainsFront(){
  noStroke();
  fill(140, 160, 170);
  
  beginShape();
  vertex(0, height/2 + 40);
  
  for(let x = 0; x <= width; x += 10){
    let y = height/2 + 40 - noise(x * 0.02 + 100) * 80;
    vertex(x, y);
  }
  
  vertex(width, height/2 + 40);
  endShape(CLOSE);
}

// --------------------
// 🌱 SOL AVEC DÉGRADÉ
// --------------------

function drawGround(){
  for(let y = height/2 + 40; y < height; y++){
    let n = map(y, height/2 + 40, height, 0, 1);
    let newColor = lerpColor(groundTop, groundBottom, n);
    stroke(newColor);
    line(0, y, width, y);
  }
}

// --------------------
// ☁ NUAGES DOUX
// --------------------

function drawCloud(x, y, size){
  
  let gradient = drawingContext.createRadialGradient(
    x, y, size*0.2,
    x, y, size
  );
  
  gradient.addColorStop(0, "rgba(255,255,255,0.9)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  
  drawingContext.fillStyle = gradient;
  ellipse(x, y, size*2, size);
}

function drawClouds(){
  noStroke();
  
  drawCloud(150, 80, 40);
  drawCloud(420, 70, 45);
  drawCloud(300, 110, 35);
}