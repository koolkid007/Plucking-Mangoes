class Rubber {
    constructor(bodyA, point) {
      var options ={
         bodyA: bodyA,
         pointB: point,
         stifness: 0.003,
         length: 15
      }  
  
      this.rubber = Constraint.create(options);
      World.add(world,this.rubber);
    }

    attach(body) {
        this.rubber.bodyA = body;
      }

      fly() {
        this.rubber.bodyA=null;
      } 
  
    display() {
      if(this.rubber.bodyA) {
        var posA = this.rubber.bodyA.position;
        strokeWeight(4)
        line(posA.x,posA.y,this.rubber.pointB.x, this.rubber.pointB.y);
      }
    }
 }
  
    