// チェコです

function setup() {
  createCanvas(300, 200);
}

function draw() {
  background('white');
  noStroke();
  noFill();
  rect(0,0,300,100);
  fill('red');
  rect(0,100,300,100);
  fill('blue');
  triangle(0,0,0,200,150,100);
}
