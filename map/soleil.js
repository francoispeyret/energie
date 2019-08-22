class Soleil {
    constructor() {
        this.w = 50;
        this.color = color('#fff394');
        this.lifeAnimation = 0;
        this.p = p5.Vector.fromAngle(this.lifeAnimation / orbit.soleilSpeed, terre.w );
    }

    show() {
        push();
        translate(this.p);
        noStroke();
        fill(this.color);
        ellipse(0,0,this.w,this.w);
        fill(255,200);
        ellipse(0,0,this.w/1.2,this.w/1.2);
        pop();


        push();
        rectMode(CENTER);
        rotate(soleil.lifeAnimation / orbit.soleilSpeed);
        noStroke();
        fill(0,70);
        //rect(-10000, 0, 20000, 20000);
        beginShape();
        vertex(0,terre.w/2+6);
        bezierVertex(
            -terre.w/2, terre.w/3,
            -terre.w/2, -terre.w/3,
            0,-terre.w/2-6
        );
        vertex(-width*2,0);
        endShape(CLOSE);
        pop();
    }

    update() {
        this.lifeAnimation += 30;
        this.p = p5.Vector.fromAngle(this.lifeAnimation / orbit.soleilSpeed, terre.w );
    }
}
