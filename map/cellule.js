class Cellule {
    constructor(type, x, w) {
        this.type = type;
        if(this.type <= 1) {
            this.color = color('#158acf');
        } else if (this.type === 2 || this.type === 3) {
            this.color = color('#7bb037');
        } else if (this.type === 4) {
            this.color = color('#cfbc88');
        } else {
            this.color = color('#5c4e45');
        }
        this.x = x;
        this.w = w;

        this.wZoomed = width / 8;

        this.hover = false;

        this.level = 0;
    }

    show() {
        strokeCap(SQUARE);
        if(this.color !== null) {
            strokeWeight(8);
            stroke(this.color);

        } else {
            noStroke()
            noFill();
        }
        arc(0,0, terre.w,terre.w, radians(this.x*this.w), radians(this.x*this.w+this.w));
        if(this.level > 0) {
            stroke(80);
            for(let l = 1; l <= this.level; l++) {
                let offset = 10 * l;
                arc(0,0, terre.w+offset,terre.w+offset, radians(this.x*this.w)+0.02, radians(this.x*this.w+this.w)-0.02);
            }
        }
        strokeCap(ROUND);
    }

    showZoomed(x) {
        noStroke();
        if(this.color !== null)
            fill(this.color);
        else
            noFill();
        rect(x*this.wZoomed - width / 2, 0, this.wZoomed, 40);
        fill(0);
        text(this.level, x*this.wZoomed - width / 2 +15, 15);

        if(this.level > 0) {
            fill(80);
            rect(x*this.wZoomed - width / 2 + 30, this.level*-15, this.wZoomed/3,this.level*15+15);
        }

        if(this.hover===true) {
            stroke(255);
            strokeWeight(2);
            noFill();
            rect(x*this.wZoomed - width / 2, 1, this.wZoomed - 2, 38);
            noStroke();
        }

        fill(30);
        rect(x*this.wZoomed - width / 2, 40, this.wZoomed, 50);

        fill('#3d2d25');
        rect(x*this.wZoomed - width / 2, 90, this.wZoomed, 500);
    }

    update() {
        this.wZoomed = width / 8;

        if(this.level > 0) {
            atmosphere.stats["pression"].qte += this.level / 1500;
            atmosphere.elements["carbone"].qte += this.level / 3000;
        }
    }

    getHover(x) {
        if(
            mouseX > x * this.wZoomed &&
            mouseX < x * this.wZoomed + this.wZoomed &&
            mouseY > height / 2 &&
            mouseY < height / 2 + 40
        ) {
            this.hover = true;
        } else {
            this.hover = false;
        }
    }

    setPressed() {
        this.level += 1;
    }
}
