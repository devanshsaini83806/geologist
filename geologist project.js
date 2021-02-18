class hammer {
    constructor(x, y) {
      var options = {
        'density':10,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 100, 20, options);
      this.width = 130;
      this.height = 30;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(5);
      stroke('black')
      fill('yellow')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  