var canvas;
var playButton;
var mc;
var mcImgL, mcImgR, mcImgU, mcImgD;


function preload() {
 mcImgL = loadImage("./assets/mc.png");
 mcImgR = loadImage("./assets/right.png");
 mcImgU = loadImage("./assets/up.png");
 mcImgD = loadImage("./assets/down.png");
}

function setup() {
  canvas = createCanvas(800, 800);

  mc = createSprite(width/2, height/2, 100, 100);
  /* mc.addImage("mcL", mcImgL);
  mc.addImage("mcR", mcImgR);
  mc.addImage("mcU", mcImgU);
  mc.addImage("mcD", mcImgD);
 */
  mc.shapeColor = "Red";

  mc.scale = 0.5;
}

function keyPressed(){
  if(keyDown === LEFT_ARROW){
    mc.x -= 10; 
    //mc.addImage(mcImgL);
  }
  if(keyDown === RIGHT_ARROW ){
    mc.x += 10; 
    //mc.addImage(mcImgR);
  }
  if(keyDown === UP_ARROW){
    mc.y -= 10; 
    //mc.addImage(mcU);
  }
  if(keyDown === DOWN_ARROW){
    mc.y += 10; 
   //mc.addImage(mcD);
  }
}


function draw() {
  background(100);

  
  

  drawSprites();
}

/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/
