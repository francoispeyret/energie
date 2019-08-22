
class Selector {
    constructor() {
        this.p = createVector(mouseX - width / 2,mouseY - height / 2);
        this.selectionStart = 0;
    }

    show() {
        if(view.select===true) {
            let v0 = createVector(0, 0);
            let v1 = this.p;

            v1.normalize();
            this.drawArrow(v0, v1.mult(terre.w/2+60), '#fff');
        }
    }

    update() {
        if(view.select===true) {
            this.p = createVector(mouseX - width / 2, mouseY - height / 2);
            const angle = degrees(selector.p.heading());
            this.selectionStart = round(map(angle,0,360,0,terre.cellulesLength)) - 4;
        }
    }

    drawArrow(base, vec, myColor) {
        push();
        stroke(myColor);
        strokeWeight(1);
        fill(myColor);
        translate(base.x, base.y);
        rotate(0.25);
        line(0, 0, vec.x, vec.y);
        rotate(-0.5);
        line(0, 0, vec.x, vec.y);
        pop();
    }
}
