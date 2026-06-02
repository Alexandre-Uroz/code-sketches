function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  describe('A red box on a white background.');
}
function draw() {
  background(255);
  
  // Slowly rotate over time
  let angle = millis() * 0.001;
  
  // The axis of rotation will be the line
  // going through the center of the canvas
  // and the mouse
  let axis = createVector(
    mouseX - width/2,
    mouseY - height/2,
    0
  );
  
  // Visualize the axis
  strokeWeight(3);
  stroke('red');
  line(0, 0, 0, axis.x, axis.y, axis.z);
  stroke('blue');
  line(0, 0, 0, -axis.x, -axis.y, -axis.z);
  
  // Rotate a box about that axis
  lights();
  noStroke();
  rotate(angle, axis);
  box();
}