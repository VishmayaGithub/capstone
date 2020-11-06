class Chain {
    constructor(bodyA,pointB) {
      var options = {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.2,
          length : 200

      }
      this.chin = Constraint.create(options)
          //this.width = width;
      this.pointB = pointB
      World.add(world, this.chin);
    }
    fly(){
        this.chin.bodyA = null
    }
    display(){
     // var pos =this.body.position;
     if(this.chin.bodyA){
    var pointAA = this.chin.bodyA.position
    var pointBB = this.pointB
      push()
      rectMode(CENTER);
      strokeWeight(5)
      stroke("blue")
      
      line(pointAA.x,pointAA.y,pointBB.x,pointBB.y);
      pop()
    }
    }
  };
