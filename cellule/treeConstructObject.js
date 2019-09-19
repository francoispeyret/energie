class TreeConstructObject extends CelluleConstructObject {

    constructor(name) {
        super(name);
    }

    show() {

    }

    showZoomed(x,wZoomed) {
        fill(50,255,30);
        rect(x*wZoomed - width / 2 + 30, this.level*-15, wZoomed/3,this.level*15+15);
    }

    update() {

    }

}
