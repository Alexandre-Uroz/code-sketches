let posX = 200;
let posY = 200;
let posR = 250;
let posG = 125;
let posB = 25;

let size = 50;

let sizeX = 100;
let sizeY = 80;

let vitX = 2;
let vitY = 3;
let vitR = 1;
let vitG = 1;
let vitB = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  //background(60);
  
  stroke(posR, posG, posB);
  fill(posR, posG, posB);
  
  posR += vitR;
  if(posR >= 255 || posR <= 0){
    vitR = vitR * -1;
  }
  
  posG += vitG;
  if(posG >= 255 || posG <= 0){
    vitG = vitG * -1;
  }
  
  posB += vitB;
  if(posB >= 255 || posB <= 0){
    vitB = vitB * -1;
  }
  
  posX += vitX;
  posY += vitY;
  
  if(posX >= width - size || posX <= 0){
    vitX = vitX * -1;
  }
  
  if(posY >= height - size || posY <= 0){
    vitY = vitY * -1;
  }
  
  circle(posX, posY, size);
}

 function keyPressed(){
  if( key === "s"){
    save("dessin-dvd-pioneer.png");
  }
}