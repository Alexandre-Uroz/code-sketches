function setup() {
  createCanvas(400, 400);
  background(220);
  for(let y = 0; y < 40; y++){
    for(let x = 0; x < 40; x++){
      noStroke();
      fill(x*10, 0, y*10);
      square(x*10, y*10, 10);
      print(x,y);
    }
  }
}

function draw() {
  
}