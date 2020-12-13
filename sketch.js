var player,ground;
var invisibleGround;
var playrImg;
var groundImg;
var corona1Img,corona2Img,corona1,corona2;
var cImg1,cImg2;
var gameState = 0;
var coronaGroup;
var playerStop;
var resetImg,restart;
var score = 0;
var msgImg,msg;
var maskImg,mask;
var social,socialImg;
var form1;
var bg;

function preload(){
   playerImg = loadAnimation("images/player-0.png","images/player-1.png","images/player-2.png");
   //groundImg = loadImage("images/ground.png");
   cImg1 = loadImage("images/corona.jpeg");
   cImg2 = loadImage("images/corona2.png");
   cImg2.scale = 0.5;
   playerStop = loadImage("images/player-1.png");
   resetImg = loadImage("images/reset.jpeg");
   msgImg = loadImage("images/download.jpeg");
   maskImg = loadImage("images/mask.png");
   socialImg = loadImage("images/social.png");
 bg = loadImage("images/bg2.jpeg");
}

function setup() {
  createCanvas(800,400);
  player = createSprite(100, 330, 50, 50);
  player.addAnimation("player",playerImg);
  player.scale = 0.5; 
  //player.debug = true;
  player.setCollider("rectangle",0,0,200,250);
  ground = createSprite(400, 330, 800, 10);
  ground.shapeColor = "green";
  //ground.visible = false;
  restart = createSprite(400,200,20,20);
  restart.addImage("reset",resetImg);
  restart.scale = 0.5;
  //ground.addImage("ground",groundImg);
  //ground.velocityX = -4;
ground.scale = 1.5;
ground.debug = false;
msg = createSprite(600,100,20,20);

msg.visible = false;
form1 = new form();
//msg = createSprite(500,200,50,50);
//msg.addImage("msg",msgImg);
//mask = createSprite(500,200,50,50);
//mask = addImage("mask",maskImg);
//social = addImage("social",socialImg);
//ground.setCollider("rectangle",0,0,800,50);
//player.depth = ground.depth;
//player.depth = player.depth + 1;
coronaGroup = new Group();
  


}

function draw() {
  background(bg);
  textSize(30);
 //fill("white");
  //text("Score : " + score,100,50);
  if(gameState===0){
    
    
    form1.display();
    
    player.visible = false;
    ground.visible = false;
    coronaGroup.visible = false;
    if(form1.changeState()){
      gameState = 1;

    }
  }
  else if(gameState === 1){
    form1.hide();
    fill("black");
    text("Score : " + score,100,50);
    
    player.visible = true;
    ground.visible = true;
    coronaGroup.visible = true;
     ground.x = ground.width/2;
     restart.visible = false;
    if(keyDown("space") &&player.y>=252.5){
      player.velocityY = -19.2;
      
    }
    player.velocityY = player.velocityY + 0.8;
    
    
    //console.log(player.y);
    spawnObstacles();
    
    if(score%100 ===0&&score>0){
      var rand2 = Math.round(random(1,3));
      msg.visible = true;
      switch(rand2){
       
        case 1: msg.addImage(msgImg);
        msg.lifetime = 75;
        break;
        case 2: msg.addImage(socialImg);
        msg.lifetime = 75;
        break;
        case 3: msg.addImage(maskImg);
        msg.lifetime = 75;
        break;
       default:
         break;
      }
      
    }
    drawSprites();
score =Math.round(score+getFrameRate()/30);
if(coronaGroup.isTouching(player)){
  gameState = 2;
}

  }
 
  else if(gameState === 2){ 
    fill("black");
    text("Score : " + score,100,50);
    coronaGroup.destroyEach();
    coronaGroup.setLifetimeEach(-1);
    coronaGroup.setVelocityEach(0);
    ground.velocityX = 0;
    player.visible = false;
    ground.visible = false;
  restart.visible = true;
  player.velocityY = 0;
  if(mousePressedOver(restart)){
  reset();

  }
  drawSprites(); 
}
player.collide(ground);

}
function spawnObstacles(){
  if(World.frameCount % 90 === 0){
  var corona = createSprite(800,280,20,20);
  corona.velocityX = -6;
  corona.y = Math.round(random(250,300));
  var rand = Math.round(random(1,2));
 // var cImage = "cImg"+rand;
 //image(cImage,corona.x,corona.y,corona.width,corona.height);
 switch(rand){
   case 1: corona.addImage(cImg1);
   corona.scale = 0.3;
   break;
   case 2: corona.addImage(cImg2);
   corona.scale = 0.1;
   break;

 }
 //corona.scale = 0.3;
 coronaGroup.add(corona);
 }
}
function reset(){
  //player.hide();
  form1 = new form();
  form1.display();
  restart.visible = false;
  gameState=0;
  score=0;
  //corona.hide();
  //ground.hide();
  //gameState = 1;
  
}


  