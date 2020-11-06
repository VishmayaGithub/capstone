class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction : 1,
          restitution : 0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      rectMode(CENTER);
      strokeWeight(5)
      stroke("blue")
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
  };
