
let interface;
let etoiles = [];
let terre;
let atmosphere;
let soleil;
let selector;
let constructView;

const debug = false;

let view = {
    zoom: false,
    select: false,
    construct: false,
};

const orbit = {
    soleilSpeed: 100000,
    etoileSpeed: 300000
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    interface = new Interface();
    terre = new Terre();
    atmosphere = new Atmosphere();
    soleil = new Soleil();
    for(let e = 0; e < 150; e++) {
        etoiles[e] = new Etoile();
    }
    selector = new Selector();
    constructView = new ConstructView();
    angleMode(RADIANS)
}

function draw() {
    background(12,12,22);
    noStroke();

    if(debug===true) {
        fill(255,0,0);
        textAlign(LEFT);
        text('selector.p.heading() --- '+degrees(selector.p.heading()),5,15);
        text('selector.selectionStart --- '+selector.selectionStart,5,30);
    }

    push();

    translate(width / 2, height / 2);

    push();
    rotate(soleil.lifeAnimation / orbit.etoileSpeed * -1);
    for(let e = 0; e < 100; e++) {
        etoiles[e].show();
    }
    pop();
    selector.show();
    terre.show();
    soleil.show();



    if(view.zoom===true) {
        constructView.show();
        constructView.update();
    } else {
        selector.update();
        soleil.update();
        terre.update();
    }

    pop();

    interface.show();
    interface.update();


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    interface.mouseMoved();
    if(view.construct === true) {
        constructView.mouseMoved();
    }
}

function mouseReleased() {
    interface.mouseReleased();
    if(view.construct === true) {
        constructView.mouseReleased();
    }
}
