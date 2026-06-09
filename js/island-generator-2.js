function setup() {
  createCanvas(600, 600);
  noLoop();

  loadPixels();

  let scale = 0.01;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let n = noise(x * scale, y * scale);

      let d = dist(x, y, width / 2, height / 2);
      let maxDist = dist(0, 0, width / 2, height / 2);

      n -= (d / maxDist) * 0.5;

      let c;

      if (n < 0.35) {
        c = color(150, 200, 255); // eau
      }
      else if (n < 0.40) {
        c = color(240, 230, 200); // plage
      }
      else if (n < 0.70) {
        c = color(140, 190, 120); // végétation
      }
      else if (n < 0.85) {
        c = color(200, 160, 120); // relief
      }
      else {
        c = color(240); // sommet
      }

      set(x, y, c);
    }
  }

  updatePixels();
}