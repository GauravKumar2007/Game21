var back,backI;

var robotI,robot;
var diamond,diamondI;
var crown,crownI;
var buildingsGroup;
var ground;

function preload(){
   robotI=loadAnimation('robot1.png','robot2.png') ;
  backI=loadImage('th(2).jpg')
  
   diamondI=loadImage('diamond.png');
   crownI=loadImage('gameplay_crown.png');
 
}
function setup(){
  createCanvas(1000,400);
  ground=createSprite(0,390,2000,10)
  back=createSprite(1000,400,0,0)
  back.addImage(backI);
  buildingsGroup=new Group();
   
}
function draw(){
  background('skyblue')
  buildings();
  drawSprites();
}
