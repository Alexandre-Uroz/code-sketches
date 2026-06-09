let cols = 120;
let rows = 120;
let colors = [];



function setup() {
  createCanvas(600, 600);
  colors = make2Darray(cols, rows)
  
  for(i=0; i<cols; i++){
    for(j=0; j<rows; j++){
      colors[i][j] = random(200);
      //console.log(colors[i][j])
    }//j
  }//i
  background(51);
  //dessiner
  for(let a = 0; a<cols; a++){
    for(let b = 0; b<rows; b++){
      let x = a*5;
      let y = b*5;
      fill(50, colors[a][b], 75);
      noStroke();
      rect(x,y,5,5)
    }
  }
}

//usine de papier quadrillé
function make2Darray(cols, rows){
  var arr = new Array(cols);
  for(var i=0; i<arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function draw() {}