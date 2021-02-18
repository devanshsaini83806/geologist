class hammer extends baseClass{
    constructor(x, y, height,width) {
      this.body = Bodies.rectangle(x, y, height,width);

     
        
      }
      display(){

        translate(this.body.position.x, this.body.position.y);
        rect(this.body.postion.x,this.body.postion.y,100,20)
      }
       
    }


