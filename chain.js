class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var option ={
         bodyA : bodyA ,
         bodyB : bodyB,
         pointB:{
             x:offsetX , y : offsetY
         },
         stiffness : 0.04, 
         length : 10
 
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain); 
    }
    display(){
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
      
       
        
    }
 
 }