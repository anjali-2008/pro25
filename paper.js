class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2,
        }
        this.body=Bodies.circle(x,y,30,options);
        this.width=30;
        this.image=loadImage("paper.png")
        

        World . add(world,this.body)
    }
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("white");
     stroke("white");
     ellipse(0,0,this.width);

     imageMode(CENTER)
     image(this.image,0, 0,70,70);

     pop ()
    }
}