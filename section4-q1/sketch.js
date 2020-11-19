// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(count<50){
  count = (count + 1) % cycle;
  size = count;
}
else if(50<=count){
  count = (count-(2*count+1))%cycle;
  size = count;
}
  // BLANK[1]
  noStroke();
  ellipse(width / 2, height / 2, size);
}
