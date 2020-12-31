const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world


function setup(){
    var canvas=createCanvas(1200,700)
    engine = Engine.create();
    world = engine.world;

    base1=new Ground(500,500,300,12)
    base2=new Ground(1000,350,300,12)

    box1=new Box(430,476,20,35)
    box2=new Box(455,476,20,35)
    box3=new Box(480,476,20,35)
    box4=new Box(505,476,20,35)
    box5=new Box(530,476,20,35)
    box6=new Box(455,440,20,35)
    box7=new Box(480,440,20,35)
    box8=new Box(505,440,20,35)
    box9=new Box(480,404,20,35)

    box10=new Box(930,326,20,35)
    box11=new Box(955,326,20,35)
    box12=new Box(980,326,20,35)
    box13=new Box(1005,326,20,35)
    box14=new Box(1030,326,20,35)
    box15=new Box(955,290,20,35)
    box16=new Box(980,290,20,35)
    box17=new Box(1005,290,20,35)
    box18=new Box(980,254,20,35)

    polygon=new Polygon(80,400,30)

    rope=new SlingShot(polygon.body,{x:80,y:400})

    ground= new Ground(600,690,1200,13)
}



function draw(){
    background(0)
    Engine.update(engine)

    base1.display()
    base2.display()

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
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()

    polygon.display()

    ground.display()

    rope.display()

    

    
    
}


function mouseDragged(){
    
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
    rope.fly();
   
}

