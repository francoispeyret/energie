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
                fill(255, 90);
            } else if(opt.hover===true) {
                fill(255, 30);
            } else {
                noFill();
            }
            rect(opt.p.x, opt.p.y, 50, 50);
            strokeWeight(0.5);
            fill(255);
            textAlign(CENTER);
            text(opt.constructName, opt.p.x+25, opt.p.y+14);

            opt.show();
        }
    }

    getPositionMouse(p) {
        return  mouseX > p.x &&
                mouseX < p.x + 50 &&
                mouseY > p.y &&
                mouseY < p.y + 50;
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
        for(let opt of this.options) {
            if(opt.hover===true) {
                this.cancelTools();
                opt.active = true;
                this.active = true;
            }
        }
    }

    getActiveName() {
        for(let opt of this.options) {
            if(opt.active===true) {
                return opt.constructName;
            }
        }
        return false;
    }

    cancelTools() {
        for(let opt of this.options) {
            opt.active = false;
        }
    }

}
