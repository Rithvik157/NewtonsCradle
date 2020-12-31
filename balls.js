class Balls{
constructor(x,y){
var options = {
isStatic : false,
friction:0,
density:2,
restitution:1
}
this.body=Bodies.circle(x,y,20,options);
this.radius=20;
World.add(world,this.body);

}
display(){
push()
translate(this.body.position.x,this.body.position.y);
angleMode(RADIANS);
rotate(this.body.angle);
fill("pink");
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);
pop()
}


}