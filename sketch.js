const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base1, base2;
var score = 0;

function setup(){
    var canvas = createCanvas(1200,700);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    base1= new Base(390,592,300,10);
    base2= new Base(930,450,200,10);

    //level1

   block0 = new Box(300,560,30,50);
   block1 = new Box(330,560,30,50);
   block2 = new Box(360,560,30,50);
   block3 = new Box(390,560,30,50);
   block4 = new Box(420,560,30,50);
   block5 = new Box(450,560,30,50);
   block6 = new Box(480,560,30,50);

   //level2

   block8 = new Box (330,510,30,50);
   block9 = new Box(360,510,30,50);
   block10 = new Box(390,510,30,50);
   block11 = new Box (420,510,30,50); 
   block12 = new Box(450,510,30,50);
   
   //level3

   block13 = new Box(360,460,30,50);
   block14 = new Box(390,460,30,50);
   block15 = new Box(420,460,30,50);

   //top

   block16 = new Box (390,410,30,50);


   //smallLevel1

   block17 = new Box(870,418,30,50);
   block18 = new Box(900,418,30,50);
   block19 = new Box(930,418,30,50);
   block20 = new Box(960,418,30,50); 
   block21 = new Box(990,418,30,50);
    
   //smallLevel2
   block22 = new Box(900,367,30,50);
   block23 = new Box(930,367,30,50);
   block24 = new Box(960,367,30,50);

   //smallLeveltop

   block25 = new Box(930,317,30,50);


   Stone1 =new Stone(50,400,20)

   sling = new SlingShot(Stone1.body,{x:150,y:450})
 
  
}

function draw(){
    background("lightpink");

   drawSprites();

   strokeWeight(2);
 
   textSize(13);
   fill("blue");
   text("Score:" + score, width-300,50 )

    base1.display();
    base2.display();

    fill(rgb(189, 75, 227));
    strokeWeight(2)
    block0.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    
    fill("skyblue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("lightgreen");
    block13.display();
    block14.display();
    block15.display();

    fill(rgb(245, 204, 93));
    block16.display();


    fill("green");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("yellow");
    block22.display();
    block23.display();
    block24.display();

    fill("orange");
    block25.display();

    Stone1.display();
    sling.display()

fill("white")
textSize(20);
strokeWeight(6);
text("Drag the hexagonal stone to release it, & launch it towards the blocks ",69,50,)

}


function mouseDragged(){
    Matter.Body.setPosition(Stone1.body,{x:mouseX,y:mouseY})
}
  
  
  function mouseReleased(){
  sling.fly()
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(Stone1.body);
    }
  }
  

 

 

