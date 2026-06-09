let c1,c2;

function setup() {
  createCanvas(600, 600);
  c1 = color(91, 174, 255);
  c2 = color(218, 237, 255);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  //background(230, 30, 23);
  
  let gradient = drawingContext.createLinearGradient(200, 200, 200, 400);
  gradient.addColorStop(0, color(28, 83, 100));
  gradient.addColorStop(1, color(57, 47, 100));
  drawingContext.fillStyle = gradient;
  
  rect(width/2, height/2, 200, 200, 20);
}