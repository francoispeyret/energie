class Etoile {
    constructor() {
        this.x = random(-100,100)/100;
        this.y = random(-100,100)/100;
        this.w = random(0.5,3);
        this.c = color(255,random(66,120));
    }

    show() {
        noStroke();
        fill(this.c);
        ellipse(this.x*width,this.y*height,this.w);
    }
}
