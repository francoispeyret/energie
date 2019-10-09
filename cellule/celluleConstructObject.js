class CelluleConstructObject {

    constructor(name) {
        this.name  = name;
        this.level = 0;
        this.color = 0;
    }

    levelUp() {
        this.level += 1;
    }

}
