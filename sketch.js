let starsX = [];
let starsY = [];


function setup() {
  createCanvas(250, 200);
    background(0);

  for (let i = 0; i < 100; i++){
    starsX[i] = random(width);
    starsY[i] = random(height);
  }
}

function draw() {
    background(0);
    fill(255);
    stroke(255);
    background(0);
    for (let i = 0; i < 100; i++){
    ellipse(starsX[i], starsY[i], 2,2);
  }
  ellipse(width/2, height/2, 100,100);
  stroke(0);
  fill(0);
  
  ellipse(mouseX, height/2, 98,99.8);
}