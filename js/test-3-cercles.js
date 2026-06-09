function setup() {
  frameRate(6);
  createCanvas(700, 650);
  background(255,214,214);
}

var paul = 1;
var joseph = 200;
var marie = 300;

function draw() {
  //fill(255,0,0);
  noFill();
  
  circle(200,120,paul);
  circle(350,120,paul);
  circle(500,120,paul);
  
  paul = paul + 5;
}