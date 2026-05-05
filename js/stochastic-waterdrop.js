let drops = [];
let dropRadius = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //add drops to the drops list
  for(let i = 0; i < 100; i++){
    drops.push(new Drop())
  }
}

function draw() {
  background(200);
  translate(width/2, height/2);
  for (let drop of drops){
    drop.update();
    drop.show();
  }
  
}

class Drop {
  constructor(){
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.radius = random(dropRadius);
  }
  show(){
    noFill();
    strokeWeight(2);
    stroke(0);
    ellipse(this.x, this.y, this.radius);
    stroke(255);
    ellipse(this.x+2, this.y, this.radius);
  }
  update(){
    this.radius-=3;
    if(this.radius < 1){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.radius = random(dropRadius);
    }
  }
}