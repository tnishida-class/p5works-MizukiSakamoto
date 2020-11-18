// ギリシャ国旗

function setup() {
  createCanvas(250, 150);
}

function draw() {
  background('white');
  noStroke();
  noFill();
  for(let i = 0; i < 9; i++){
    fill('blue');
    rect(0, i*30, 250, 15);
  }
  fill('blue');
  rect(0,0,75,75);
  fill('white');
  rect(30, 0, 15, 75);
  rect(0, 30, 75, 15);
}
