class Bob {
    constructor(x, y, radius) {
        var options = {

            isStatic: false,
            restitution: 0.9,
            density: 0.001       
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius*2;

        World.add(world, this.body);

        
    }

    display() {
        fill("pink");
        strokeWeight(3);
        stroke("black");

        circle(this.body.position.x, this.body.position.y, this.radius);
        
        //image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);

    }
}