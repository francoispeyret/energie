class ConstructView {
    constructor() {

    }

    show() {
        background(30,200);

        push();
        noStroke();
        rect(-width/2,0,width,height/2);
        let i = 0;
        for(let x = selector.selectionStart; x < selector.selectionStart + round(width/4); x++) {
            if(x < 0 && typeof terre.cellules[terre.cellulesLength + x] !== 'undefined')
                terre.cellules[terre.cellulesLength + x].showZoomed(i);
            if(typeof terre.cellules[x] !== 'undefined')
                terre.cellules[x].showZoomed(i);
            i++;
            if(i >= 8) { break; }
        }
        pop();

    }

    update() {
        let i = 0;

        for(let x = selector.selectionStart; x < selector.selectionStart + round(width/4); x++) {
            if(x < 0 && typeof terre.cellules[terre.cellulesLength + x] !== 'undefined')
                terre.cellules[terre.cellulesLength + x].update();
            else if(typeof terre.cellules[x] !== 'undefined')
                terre.cellules[x].update();
            i++;
            if(i >= 8) { break; }
        }
    }

    mouseMoved() {
        let i = 0;
        for(let x = selector.selectionStart; x < selector.selectionStart + round(width/4); x++) {
            if(x < 0 && typeof terre.cellules[terre.cellulesLength + x] !== 'undefined')
                terre.cellules[terre.cellulesLength + x].getHover(i);
            else if(typeof terre.cellules[x] !== 'undefined')
                terre.cellules[x].getHover(i);
            i++;
            if(i >= 8) { break; }
        }
    }

    mouseReleased() {
        for(let x = selector.selectionStart; x < selector.selectionStart + round(width/4); x++) {
            if(x < 0 &&
                typeof terre.cellules[terre.cellulesLength + x] !== 'undefined' &&
                terre.cellules[terre.cellulesLength + x].hover===true) {
                terre.cellules[terre.cellulesLength + x].setPressed();
                break;
            } else if(typeof terre.cellules[x] !== 'undefined' &&
                terre.cellules[x].hover===true) {
                terre.cellules[x].setPressed();
                break;
            }

        }
    }
}
