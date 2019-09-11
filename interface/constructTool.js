class ConstructTool {
    constructor() {
        this.active = false;
        this.hover = false;

        this.toolOptions = new ConstructToolOptions();
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
        rect(70,26,50,50);

        if(this.active===true) {
            stroke(0);
            strokeWeight(1.5);
            line(80,35,110,65);
            line(80,65,110,35);

            this.toolOptions.show();


        } else {

        }
    }

    getPositionMouse() {
        if(
            mouseX > 70 &&
            mouseX < 120 &&
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
            view.construct = true;
            return true;
        }
        return false;
    }


    getCancel() {
        if(this.getPositionMouse()===true) {
            this.active = false;
            view.construct = false;
            this.toolOptions.cancelTools();
            return true;
        }
        return false;
    }

    getToolActive() {
        for(let tool of this.toolOptions.options) {
            if(tool.active===true) {
                return tool;
            }
        }
        return false;
    }

}
