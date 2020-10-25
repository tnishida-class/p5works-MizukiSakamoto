// チェッカー
//function setup() {
  //createCanvas(200, 200);
  //const size = width / 8;
  //noStroke();
  //for(let i = 0; i < 8; i++){
      //for(let j = 0; j < 8; j++){

  //}
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
  //}
//}
function setup() {
  createCanvas(200,200);
  noStroke();
}

function draw(){
  let size=width/8;
  for(let i=0;i<=8;i++){
    if(i%2==0){
      for(let j=1;j <=8;j+=2){
        fill('gray');
        rect(i*size,j*size,size,size);
      if(j==5,7){
        fill(0);
       ellipse((size*i)+(size/2),(size*j)+(size/2),size);
      if(j==1){
          fill('red');
          ellipse((size*i)+(size/2),(size*j)+(size/2),size);
        }
    if(j==3){
          fill('gray');
      ellipse((size*i)+(size/2),(size*j)+(size/2),size);
          }
      }
     }
    }else{
      for(let j=0;j<=8;j+=2){
        fill('gray');
        rect(i*size,j*size,size,size);
        if(j==6){
        fill(0);
       ellipse((size*i)+(size/2),(size*j)+(size/2),size);
        }
        if(j==2){
        fill('red');
        ellipse((size*i)+(size/2),(size*j)+(size/2),size);
                }
        if(j==0){
          fill('red');
        ellipse((size*i)+(size/2),(size*j)+(size/2),size);
        }
      }
    }
    }
}
