const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase1,computerBase2;
var player1,player2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase1 = new computerBase( width - 300,random(450, height - 300),180,150);

   computerBase2 = new computerBase(width - 1200,random(450,height - 300),180,150);

   player1 = new player(width - 300,random(450,height - 555),180,150);

   player2 = new player(width - 1200 ,random(450,height - 525),180,150);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
    computerBase1.display();
    computerBase2.display();
   
   //display Player and computerplayer
   player1.display();
   player2.display();


}
