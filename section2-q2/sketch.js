// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
  if(i % 2 ==0 && j % 2 ==1){
    fill('gray');
 rect(size*i,size*j,size,size);
  }
  else if(i % 2 == 1 && j % 2 == 0){
   fill('gray');
    rect(size*i,size*j,size,size);
  }

  if(i%2==0 && j%2==1 && j<3){
    fill('red');
 ellipse(size*i+size/2,size*j+size/2,size);
      }
  else if(i%2==1 && j%2==0 && j<3){
    fill('red');
 ellipse(size*i+size/2,size*j+size/2,size);
  }
  if(i%2==0 &&j%2==1 && 4<j){
    fill(0);
  ellipse(size*i+size/2,size*j+size/2,size);
  }
  else if(i%2==1 && j%2==0 && 4<j){
    fill(0);
  ellipse(size*i+size/2,size*j+size/2,size);
  }
  }
  }
}
