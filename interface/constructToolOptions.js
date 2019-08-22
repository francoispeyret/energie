class ConstructToolOptions {
    constructor() {
        this.visible = false;
        this.active = false;
        this.options = [
            {
                constructName: "ELECT",
                active: false,
                hover: false,
                cost: 15,
                p: {
                    x: 70,
                    y: 76
                },
                show: function() {
                }
            },
            {
                constructName: "TREE",
                active: false,
                hover: false,
                cost: 1,
                p: {
                    x:70,
                    y:126
                },
                show: function() {
                }
            }
        ];

    }

    show() {
        for(let opt of this.options) {
            strokeWeight(1);
            stroke(255);
            if(opt.active===true) {
                fill(255,
                    90);
            } else if(opt.hover===true) {
                fill(255, 30);
            } else {
                noFill();
            }
            rect(opt.p.x, opt.p.y, 50, 50);
            strokeWeight(0.5);
            fill(255);
            text(opt.constructName, opt.p.x+5, opt.p.y+14);

            opt.show();
        }
    }

    getPositionMouse(p) {
        if(
            mouseX > p.x &&
            mouseX < p.x + 50 &&
            mouseY > p.y &&
            mouseY < p.y + 50
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    getHover() {
        for(let opt of this.options) {
            if(this.getPositionMouse(opt.p)===true) {
                opt.hover = true;
            } else {
                opt.hover = false;
            }
        }
    }

    getActive() {
        this.active = false;
        for(let opt of this.options) {
            if(opt.hover===true) {
                opt.active = true;
                this.active = true;
            } else {
                opt.active=false;
            }
        }
    }

}
