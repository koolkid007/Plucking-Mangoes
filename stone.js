class Stone1 {
    constructor(x,y) {
      var options ={
        isStatic: false,
        restitution: 0,
        friction: 1,
        density: 1.2
      }   

      this.body = Bodies.circle(x,y,25,options);
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }

    display() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0,0,25);
      pop();
    }
}