class Ball{
    constructor(){
      var options = {restitution : 0.2 }

      this.mysecondBody = Bodies.circle(200,300,25);

      World.add(world, this.mysecondBody);

    }
    display(){

      ellipseMode(RADIUS);
      ellipse(this.mysecondBody.position.x,this.mysecondBody.position.y, 25, 25);
    
    }
}