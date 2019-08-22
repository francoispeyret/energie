class SelectTool {
    constructor() {
        this.active = true;
        this.hover = false;
    }

    show() {
        strokeWeight(1);
        stroke(255);
        if(this.active===true) {
            fill(255);
        } else if(this.hover===true) {
            fill(255,30);
        } else {
            noFill();
        }
        rect(10,26,50,50);

        if(this.active===true) {
            stroke(0);
            strokeWeight(1.5);
            line(20,35,50,65);
            line(20,65,50,35);
        } else {
            line(17,43,17,63);
            line(23,53,23,63);
            line(29,48,29,63);
            line(35,53,35,63);
            line(41,48,41,63);
            line(47,53,47,63);
            line(53,43,53,63);
        }
    }

    getPositionMouse() {
        if(
            mouseX > 10 &&
            mouseX < 60 &&
            mouseY > 10 &&
            mouseY < 76
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    getHover() {
        if(this.getPositionMouse()===true) {
            return true;
        }
        this.hover = false;
        return false;
    }

    setHover() {
        this.hover = true;
    }

    getActive() {
        if(this.getPositionMouse()===true) {
            this.active = true;
            view.select = true;
            return true;
        }
        return false;
    }

    getCancel() {
        if(this.getPositionMouse()===true) {
            this.active = false;
            view.select = false;
            view.zoom = false;
            return true;
        }
        return false;
    }

}
