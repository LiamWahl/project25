class paper
  {
    constructor(x,y)
    {
      var options={
        isStatic:false,
              restitution:0.3,
              friction:0,
              density:1.2
          
          
              }
      
          
          this.body = Bodies.circle(x, y, 50, options);
        this.radius=50;
        this.image=loadImage("paper.png");
     World.add(world, this.body);
          
    }
    display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          ellipseMode(RADIUS);
          imageMode(CENTER);
          image(this.image,0,0,this.radius,this.radius);
          pop();
        }	
      
      
     
  
  }