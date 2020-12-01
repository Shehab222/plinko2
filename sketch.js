
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos=[];
var particles=[];
var divisions=[];

var score=0;
var particle;
var turn=0;
var gameState= "play";

var divisionHeight = 250;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  
for(var a=50; a<=width-10; a=a+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(a,175,10));
}

for(var b=50; b<=width-10; b=b+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(b,275,10));
}

for(var c=50; c<=width-10; c=c+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(c,375,10));
}

for(var d=50; d<=width-10; d=d+50){
  //adding the plinkos to array
  //push command helps t add new values in the array
plinkos.push(new Plinko(d,475,10));
}

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}


ground = new Ground(400,795,800,10);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  textSize(22);
  fill("white");
text("Score:"+score,30,65)
text("Turns: " + turn, 720,65)
text("100",25,560)
text("100",100,560)
text("100",175,560)
text("100",250,560)
text("300",335,560)
text("300",420,560)
text("300",500,560)
text("500",575,560)
text("500",660,560)
text("500",730,560)




// 500 points
if (particle != null)
{
  particle.display();

  
  if (particle.body.position.y> 560)
  {
  if (particle.body.position.x >= 525 )
  {
    score= score+500
    particle=null;
  if (turn>5) gameState= "end";
  }
  }
}
// 300 points
if (particle != null)
{
  particle.display();

  

  if (particle.body.position.y> 560)
  {
  if (particle.body.position.x > 301 && particle.body.position.x < 525 )
  {
    score= score+300
   particle=null;

if (turn>=5) gameState= "end";
  }
}
// 100 points
if (particle != null)
{
  particle.display();

  if (particle.body.position.y> 560)
  {
  if (particle.body.position.x <300 )
  {
    score= score+100
   particle=null;
if (turn>=5) gameState= "end";
  }
  }
}

}
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var j = 0; j < divisions.length; j++) {
     
    divisions[j].display();
    
  }

  

 for (var x = 0; x < particles.length; x++) {
  
    particles[x].display();
  }
ground.display();
if (turn>=5){
  gameState="end";
  textSize(100);
  fill("red");
  text(" GAME OVER",100,400);
}
   
}

this.onclick = function (){
  if (gameState !== "end") {
    turn++;
    particle= new Particle(mouseX,10,10,10);
  }
}