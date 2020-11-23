class Chain{

    constructor(bodyA,pointB){
    
    var options={
    stiffness:1,
    length:200,
    bodyA:bodyA,
    pointB:pointB
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    this.pointB=pointB;
    }
    
    display(){
    
    var pointA=this.chain.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(4);
    stroke("yellow");
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    
    
    }
    
    
    
    
    }