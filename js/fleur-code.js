let v = [];
let rows = 30, cols = 90;

let pNumSlider, pLenSlider, diameterSlider, pSharpSlider;
let pNumber, pLength, diameter, pSharpness;

let heightSlider, curvatureSlider1, curvatureSlider2;
let flowerHeight, curvature1, curvature2;

let bumpSlider, bumpNumSlider;
let bump, bumpNum;

let pNum, fD, pLen, pSharp;
let fHeight, curve1, curve2;
let b, bNum;

function setup() {
  canvas = createCanvas(500, 500, WEBGL);
  canvas.class("canvas");
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  noStroke();
  cam = createCamera();
  cam.move(0, 0, 600);
  
  pNumber = createDiv();
  pNumber.class("valueDisplay");
  pNumSlider = createSlider(1, 20, 5, 1);
  pNumSlider.class("Slider");
  
  diameter = createDiv();
  diameter.class("valueDisplay");
  diameterSlider = createSlider(20, 250, 180, 10);
  diameterSlider.class("Slider");
  
  pLength = createDiv();
  pLength.class("valueDisplay");
  pLenSlider = createSlider(0, 300, 50, 10);
  pLenSlider.class("Slider");
  
  pSharpness = createDiv();
  pSharpness.class("valueDisplay");
  pSharpSlider = createSlider(0.0, 10.0, 0.4, 0.1);
  pSharpSlider.class("Slider");
  
  flowerHeight = createDiv();
  flowerHeight.class("valueDisplay");
  heightSlider = createSlider(0, 600, 300, 10);
  heightSlider.class("Slider");
  
  curvature1 = createDiv();
  curvature1.class("valueDisplay");
  curvatureSlider1 = createSlider(0.0, 4.0, 0.8, 0.1);
  curvatureSlider1.class("Slider");
  
  curvature2 = createDiv();
  curvature2.class("valueDisplay");
  curvatureSlider2 = createSlider(0.0, 1.0, 0.2, 0.05);
  curvatureSlider2.class("Slider");
  
  bump = createDiv();
  bump.class("valueDisplay");
  bumpSlider = createSlider(0.0, 5.0, 2.5, 0.5);
  bumpSlider.class("Slider");
  
  bumpNum = createDiv();
  bumpNum.class("valueDisplay");
  bumpNumSlider = createSlider(0, 20, 10, 1);
  bumpNumSlider.class("Slider");
}

function draw() {
  background(75, 79, 51);
  orbitControl(4, 4);
  
  rotateX(60);
  
  pNum = pNumSlider.value();
  fD = diameterSlider.value();
  pLen = pLenSlider.value();
  pSharp = pSharpSlider.value();
  
  fHeight = heightSlider.value();
  curve1 = curvatureSlider1.value();
  curve2 = curvatureSlider2.value();
  
  b = bumpSlider.value();
  bNum = bumpNumSlider.value();
  
  for(theta = 0; theta < rows; theta += 1){
    v.push([]);
    for(let phi = 0; phi < cols; phi += 1){
      let r = (pLen * pow(abs(sin(pNum/2*phi*360/cols)), pSharp) + fD) * theta/rows;
      let x = r * cos(phi*360/cols);
      let y = r * sin(phi*360/cols);
      let z = vShape(fHeight, r/100, curve1, curve2, 1.5) - 200 +
          bumpiness(b, r/100, bNum, phi*360/cols);
      
      let pos = createVector(x, y, z);
      v[theta].push(pos);
    }
  }
  for(let theta = 0; theta < v.length; theta++){
    for(let phi = 0; phi < v[theta].length; phi++){
      fill(340, 100-theta*2, 100);
      if(theta < v.length-1 && phi < v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        vertex(v[theta+1][phi+1].x, v[theta+1][phi+1].y, v[theta+1][phi+1].z);
        vertex(v[theta][phi+1].x, v[theta][phi+1].y, v[theta][phi+1].z);
        endShape(CLOSE);
      }
      else if(theta < v.length-1 && phi == v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
        vertex(v[theta+1][0].x, v[theta+1][0].y, v[theta+1][0].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        endShape(CLOSE);
      }
    }
  }
  
  pNumber.html("Nombre de pétale : " + pNumSlider.value());
  diameter.html("Diamètre : " + diameterSlider.value());
  pLength.html("Longueur de pétale : " + pLenSlider.value());
  pSharpness.html("Pointe de pétale : " + pSharpSlider.value());
  
  flowerHeight.html("Hauteur de la fleur : " + heightSlider.value());
  curvature1.html("Courbe 1 : " + curvatureSlider1.value());
  curvature2.html("Courbe 2 : " + curvatureSlider2.value());
  
  bump.html("Vagues : " + bumpSlider.value());
  bumpNum.html("Nombre de vagues : " + bumpNumSlider.value());
  
  v = [];
}

function vShape (A, r, a, b, c){
  return A * pow(Math.E, -b * pow(abs(r), c)) * pow(abs(r), a);
}

function bumpiness (A, r, p, angle){
  return 1 + A * pow(r, 2) * sin(p*angle);
}