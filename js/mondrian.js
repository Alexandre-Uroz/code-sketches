function setup() {
  createCanvas(windowWidth, 500);
  stroke(0);
  strokeWeight(5);
  noLoop();
}

function draw() {
  background(255);
  drawRect(0, 0, width, height, 4);
}

let toggle = true;

function drawRect(x, y, w, h, depth){
  if(depth > 0) {
    //recursive case
    if(toggle){
      //vertical line
      let sizePercentage = random([0.4, 0.8]);
      //left rect
      drawRect(x, y, w * sizePercentage, h, depth - 1);
      //right rect
      drawRect(
        x + w * sizePercentage,
        y,
        w * sizePercentage,
        h,
        depth - 1
      );
    }
    else{
      //horizontal lines = top and bottom rects
      let sizePercentage = random([0.4, 0.8]);
      //top rect
      drawRect(x, y , w, h * sizePercentage, depth - 1);
      //bottom rect
      drawRect(
        x,
        y + h * sizePercentage,
        w,
        h * (1 - sizePercentage),
        depth - 1
      );
    }
    toggle = !toggle;
  }
  else{
    // base-case: depth = 0
    // Draw a rectangle with white fill or random color
    fill(255);
    let colors = [
      [220, 0, 0], //red
      [0, 0, 220], //blue
      [240, 220, 0] //yellow
    ];
    if(random(1) < 0.3){
      fill( random(colors) );
    }
    rect(x, y, w, h);
  }
}