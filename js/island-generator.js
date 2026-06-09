function setup() {
  createCanvas(600, 600);
  noLoop();

  loadPixels();

  let scale = 0.01;      // taille des formes
  let threshold = 0.5;   // séparation eau / terre

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      // Valeur du bruit de Perlin entre 0 et 1
      let n = noise(x * scale, y * scale);

      let c;

      if (n < threshold) {
        c = color(150, 200, 255); // océan
      } else {
        c = color(200, 160, 120); // terre
      }

      set(x, y, c);
    }
  }

  updatePixels();
}