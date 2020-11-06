const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;









function preload() {
    
}

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(350,650,700,20);
    box1 = new Box(400,600,40,40)
    box2 = new Box(450,600,40,40)
   box3 = new Box(500,600,40,40)
   box4  = new Box(550,600,40,40)

   box5 = new Box(400,550,40,40)
    box6 = new Box(450,550,40,40)
   box7 = new Box(500,550,40,40)
   box8  = new Box(550,550,40,40)

   box9 = new Box(400,500,40,40)
   box10 = new Box(450,500,40,40)
   box11= new Box(500,500,40,40)
   box12= new Box(550,500,40,40)

   box13 = new Box(400,450,40,40)
   box14 = new Box(450,450,40,40)
   box15= new Box(500,450,40,40)
   box16= new Box(550,450,40,40)

   box17 = new Box(400,400,40,40)
   box18 = new Box(450,400,40,40)
   box19= new Box(500,400,40,40)
   box20= new Box(550,400,40,40)

   ball = new Ball(200,400,40,40)
   chain = new Chain(ball.body,{x:200,y:400})
}

function draw(){
    
        background("white");
    
       
        
    
    Engine.update(engine);
    box1.display()
    box2.display()
    box3.display()
    box4.display()

    box5.display()
    box6.display()
    box7.display()
    box8.display()

    box9.display()
    box10.display()
    box11.display()
    box12.display()

    box16.display()
    box15.display()
    box13.display()
    box14.display()

    box17.display()
    box18.display()
    box19.display()
    box20.display()

    ground.display();
    chain.display()
    ball.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}