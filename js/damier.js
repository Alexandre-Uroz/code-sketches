const totalRows = 12;
const totalCols = 12;
const unit = 50;

function setup() {
  createCanvas(totalCols * unit, totalRows * unit);
  background(220);
  noStroke();
  
  // boucle dans une boucle
  for(let row = 0; row < totalRows; row++){
    for(let col = 0; col < totalCols; col++){
      
      let sum = col + row;
      
      if(sum % 2 == 0){fill(0);}
      else {fill(255);}
      
      square(col*unit, row*unit, unit);
    }
  }
}

function draw() {
}