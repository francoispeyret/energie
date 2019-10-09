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
        this.celluleFunction('update()');
    }

    mouseMoved() {
        this.celluleFunction('getHover(i)');
    }

    mouseReleased() {
        let toolActive = userInterface.constructTool.getToolActive();
        if(!toolActive)
            return;

        let indexImpact = false;
        for(let x = selector.selectionStart; x < selector.selectionStart + round(width/4); x++) {
            if(
                x < 0 &&
                typeof terre.cellules[terre.cellulesLength + x] !== 'undefined' &&
                terre.cellules[terre.cellulesLength + x].hover===true
            ) {
                indexImpact = terre.cellulesLength + x;
                break;
            } else if(
                typeof terre.cellules[x] !== 'undefined' &&
                terre.cellules[x].hover===true
            ) {
                indexImpact = x;
                break;
            }
        }
        if(indexImpact) {
            const indexImpactObject = terre.cellules[indexImpact].celluleConstructObject;
            if(
                indexImpactObject === null ||
                (
                    indexImpactObject &&
                    userInterface.constructTool.toolOptions.getActiveName() === indexImpactObject.name
                )
            ) {
                if(terre.cellules[indexImpact].canBeConstructed()) {
                    terre.cellules[indexImpact].setPressed(toolActive);
                }
            }

        }
    }

    celluleFunction(action) {
        let i = 0;
        for(let x = selector.selectionStart; x < selector.selectionStart + round(width/4); x++) {
            if(x < 0 && typeof terre.cellules[terre.cellulesLength + x] !== 'undefined')
                eval('terre.cellules[terre.cellulesLength + x].'+action);
            else if(typeof terre.cellules[x] !== 'undefined')
                eval('terre.cellules[terre.cellulesLength + x].'+action);
            i++;
            if(i >= 8) { break; }
        }
    }

}
