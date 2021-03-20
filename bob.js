class Bob{
    constructor(x,y,r){
        var option ={
            isStactic = true
        }
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.r = r;
       
    }
    display(){
        
        var paperpos=this.body.position;		
            image(this.image, 0, 0, this.width, this.height);
			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			


    }

}