class ElectConstructObject extends CelluleConstructObject {

    constructor(name) {
        super(name);
        this.color = 80;
    }

    show() {

    }

    showZoomed(x,wZoomed) {
        fill(this.color);
        rect(x*wZoomed - width / 2 + 30, this.level*-15, wZoomed/3,this.level*15+15);
    }

    update() {

    }

}
