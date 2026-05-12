//image de DVD
let img;

function preload(){
  img = loadImage("../images/DVD_VIDEO_logo_small.png");
}

//Bouncy object
let bouncy = {
  size: 64,
  posX: 10,
  posY: 15,
  vitX: 1.2,
  vitY: 0.9,
  colorRed : 255,
  colorGreen : 120,
  colorBlue : 0,
  
  bouger: function(){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;
  },
  
  rebondir: function(){
    if(this.posX + this.size > width || this.posX < 0){
      this.vitX *= -1;
      this.colorRed = random(255);
      this.colorGreen = random(255);
    }
    if(this.posY + this.size*0.5 > height || this.posY < 0){
      this.vitY *= -1;
      this.colorBlue = random(255);
      this.colorGreen = random(255);
    }
  },
  
  dessiner: function(){
    noFill();
    noStroke();
    rect(this.posX, this.posY, this.size, this.size*0.5);
    
    img.loadPixels();
    for (let i = 0; i < img.pixels.length; i += 4){
      img.pixels[i + 0] = this.colorRed; // Red
      img.pixels[i + 1] = this.colorGreen; // Green
      img.pixels[i + 2] = this.colorBlue; // Blue
    }
    
    img.updatePixels();
    image(img, this.posX, this.posY, this.size, this.size*0.5);
  },
  
  update: function(){
    this.bouger();
    this.rebondir();
    this.dessiner();
  } //fin update
}; //fin du bouncy object

let chaton = Object.create(bouncy);
chaton.vitX = 1.4;
chaton.vitY = 1;
chaton.colorRed = 0;

let cactus = Object.create(bouncy);
cactus.name = "Aïe ça pique !"
cactus.vitX = 0.7;
cactus.vitY = 0.5;
cactus.colorBlue = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  bouncy.update();
  chaton.update();
  cactus.update();
}