
class UserInterface {

    constructor() {
        this.selectTool = new SelectTool();
        this.constructTool = new ConstructTool();
    }

    show() {

        // TOOLS
        this.heading(10,10,50,'SELECT');
        this.selectTool.show();

        if(this.selectTool.active===true && view.zoom===true) {
            this.heading(70,10,50,'CONSTR');
            this.constructTool.show();
        }



        // STATS TERRE
        this.heading(10,height - 116,70,'ATMO');
        atmosphere.showInterface();
    }

    update() {

    }

    heading(x,y,w,word) {
        fill(255);
        strokeWeight(1);
        stroke(255);
        rect(x, y, w, 16);
        fill(30);
        strokeWeight(0.5);
        stroke(0);
        textAlign(CENTER);
        text(word, x+w/2, y +12 );
    }

    mouseMoved() {
        if(this.selectTool.getHover()) {
            this.selectTool.setHover();
        }
        if(this.constructTool.getHover()) {
            this.constructTool.setHover();
        }
        if(this.constructTool.active===true) {
            if(this.constructTool.toolOptions.getHover()) {
                this.constructTool.toolOptions.setHover();
            }
        }
    }

    mouseReleased() {
        if(this.selectTool.active === true) {
            view.zoom = true;
            this.selectTool.getCancel();

            if(this.constructTool.active === true) {
                this.constructTool.getCancel();
                this.constructTool.toolOptions.getActive();

                if(this.constructTool.toolOptions.active===true) {
                    constructView.mouseReleased();
                }

            } else {
                this.constructTool.getActive();
            }
        } else {
            this.selectTool.getActive();
        }
    }
}
