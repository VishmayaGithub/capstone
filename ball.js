class Ball {
    constructor(x,y,width,height) {
      var options = {
          density : 2,
          frictionAir : 0.05

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle
      var pos =this.body.position;
      push()
      
      ellipse(RADIUS);
     translate(pos.x,pos.y)
     // strokeWeight(5)
     // stroke("blue")
     rotate(angle)
      fill("indigo");
      ellipse(0,0, this.width,this.height);
      pop()
    }
  };
