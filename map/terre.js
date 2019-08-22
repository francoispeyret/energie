class Terre {
    constructor() {
        this.w = width / 2.5;
        this.cellules = [];
        this.cellulesLength = 90;
        for(let x = 0; x < this.cellulesLength; x++) {
            this.cellules[x] =
                new Cellule(
                    floor(random(0,5)),
                    x,
                    360/this.cellulesLength
                );
        }
        this.color = color('#5c442e');
    }

    show() {
        ellipseMode(CENTER);
        atmosphere.show(this.w);
        fill(0);
        ellipse(0,0,this.w,this.w);
        fill('#3d2d25');
        ellipse(0,0,this.w-20,this.w-20);
        fill('#73371d');
        ellipse(0,0,this.w/1.5,this.w/1.5);
        fill('#ff4400');
        ellipse(0,0,this.w/2.5,this.w/2.5);
        fill('#ffcf40');
        ellipse(0,0,this.w/5,this.w/5);
        fill('#ffe491');
        ellipse(0,0,this.w/10,this.w/10);
        noFill();

        strokeWeight(2);
        for(let x = 0; x < this.cellulesLength; x++) {
            this.cellules[x].show();
        }
    }

    update() {
        this.w = width / 2.5;
        for(let c = 0; c < this.cellules.length; c++) {
            this.cellules[c].update(this.w / this.cellules.length);
        }
        atmosphere.update();
    }
}
