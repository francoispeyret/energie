class Soleil {

    constructor() {
        this.w = 1000;
        this.color = color('#fff394');
        this.lifeAnimation = 0;
        this.p = p5.Vector.fromAngle(this.lifeAnimation / orbit.soleilSpeed, terre.w *2);
    }

    show() {


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

        push();
        rotate(soleil.lifeAnimation / orbit.soleilSpeed);
        translate(terre.w*2,0);
        noStroke();
        fill(this.color);
        ellipse(0,0,this.w,this.w);
        fill(255,100);
        ellipse(0,0,this.w/1.025,this.w/1.025);
        ellipse(0,0,this.w/1.05,this.w/1.05);
        ellipse(0,0,this.w/1.075,this.w/1.075);
        ellipse(0,0,this.w/1.1,this.w/1.1);
        pop();
    }

    update() {
        this.lifeAnimation += 100;
        this.p = p5.Vector.fromAngle(this.lifeAnimation / orbit.soleilSpeed, terre.w );
    }
}
