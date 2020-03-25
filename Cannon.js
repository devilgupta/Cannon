class Cannon{
    constructor(x,y,width,height){
        var cannon_options={
            restitution:1,
            density:1,
            friction:2
        }
        var circle_options={
            angle:mouseX,
        }
        this.body=Bodies.rectangle(x,y,width,height,cannon_options);
        this.body=Bodies.circle(x,y,radius,cannon_options,circle_options);
        this.width=width;
        this.height=height;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        rectMode(center);
        fill("white");
        rect(100,370,50,20);
        ellipseMode(RADIUS);
        fill("white");
        strokeWeight(4);
        ellipse(100,335,50);
        rectMode(CENTER);
        fill("green");
        rect(140,335,30,10);
    }
}