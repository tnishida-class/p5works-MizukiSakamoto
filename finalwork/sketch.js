// 最終課題を制作しよう

let x,y,vx,vy,angle;
const g =1;
const vyMax = 30;
function setup() {
  createCanvas(windowWidth, windowHeight);
 x = width/2;
 y = height/2;
  vx=8;
  vy=8;
  angle=0;
}

function draw() {
  background(0);
  noStroke();
  fill('yellow');
  star(x,y,50,angle);
  angle += 0.1;
  x += vx;
  y += vy;

  vy = constrain(vy+g,-vyMax,vyMax);
  if(x<0||x>width){vx=-1*vx;}
  if(y>height){vy=-1*vy;}
  x = constrain(x,0,width);
  y = constrain(y,0,height);
}

function star(cx,cy,r,angle){
  beginShape();
  for(var i = 0;i<20;i++){
    var theta=TWO_PI*i*2/5-HALF_PI+angle;
    var x = cx+cos(theta)*r;
    var y = cy+sin(theta)*r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
