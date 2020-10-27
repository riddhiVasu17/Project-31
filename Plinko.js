class plinko {

    constructor(x,y,r) {

        var option = {
            isStatic : true
        }

        this.body = Bodies.circle(x, y, r, option);
        
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.radius = r;

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.body.radius);
    }
}