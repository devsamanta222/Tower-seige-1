class Box {
  constructor(x,y,width,height) {
    var options = {
       friction: 0.3,
       density: 0.8,
       restitution: 0.2
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    
    
    var pos =this.body.position;
    rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
   
  }


};
