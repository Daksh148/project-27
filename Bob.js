class Bob{

    constructor(x,y){
    
        var options={
         
         isStatic:false,
         restitution:0.5,
         friction:1,
         density:1.2
        
    
        }
        this.body=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.body);
    
    
    
    }
    display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
    
    
    
    }