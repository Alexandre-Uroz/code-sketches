let flag1, flag2, flag3;

function setup() {
  createCanvas(600, 600);
  
  flag1 = new Flag(40, 80, 'gold', 'royalblue', 'crimson');
  flag2 = new Flag(400, 400, 'yellow', 'pink', 'orange');
  flag3 = new Flag(220, 240, 'cyan', 'purple', 'magenta')
}

function draw() {
  background(240);
  
  if(frameCount > 100){flag1.c2 = "black";}
  
  flag1.drawFlag();
  flag2.drawFlag();
  flag3.drawFlag();
}

class Flag {
  w = 160;
  h = 100;
  constructor(x, y, c1, c2, c3){
    this.x = x;
    this.y = y;
    this.c1 = c1;
    this.c2 = c2;
    this.c3 = c3;
  }
  drawFlag(){
    const stripe = this.w/3;
    const slices = 20;
    const sliceH = this.h/slices;
    const amp = 8;
    const t = frameCount * 0.05;
    const colors = [this.c1, this.c2, this.c3]
    noStroke();
    for (let row = 0; row < slices ; row++){
      const y = this.y + row * sliceH;
      const offset = sin(row * 0.3 + t) * amp;
      for (let i = 0; i < 3; i++) {
        fill(colors[i]);
        rect(this.x + i * stripe + offset, y, stripe, sliceH + 1);
      }
    }
  }
}