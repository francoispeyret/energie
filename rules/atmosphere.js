class Atmosphere {
    constructor() {
        this.elements = {
            "azote": {
                qte: 78,
                affichage: 'N2'
            },
            "oxygen": {
                qte: 20,
                affichage: 'O2'
            },
            "argon": {
                qte: 1,
                affichage: 'Ar'
            },
            "carbone": {
                qte: 1,
                affichage: 'CO2'
            },
        }
        this.stats = {
            "temperature": {
                qte: 15,
                affichage: '°C'
            },
            "pression": {
                qte: 1043,
                max: 2500,
                affichage: 'hPa'
            }
        }
    }

    update() {
        if(this.stats["pression"].qte >= this.stats["pression"].max) {
            this.stats["pression"].qte = this.stats["pression"].max;
        } else {
            //this.stats["pression"].qte += 1;
        }
    }

    show(w) {
        const atmoHeight = map(this.stats["pression"].qte,1000,1200,40,60);
        ellipseMode(CENTER);
        fill(255,5);
        ellipse(0,0,w+atmoHeight*2,w+atmoHeight*2);
        fill(255,12);
        ellipse(0,0,w+atmoHeight,w+atmoHeight);
    }

    showInterface() {

        strokeWeight(1);
        stroke(255);
        noFill();
        rect(10, height - 100, 70, 85);

        textAlign(LEFT);
        fill(255);
        noStroke();
        textSize(10);
        text(this.elements["azote"].affichage+' : '+ceil(this.elements["azote"].qte)+'%', 15, height - 86);
        text(this.elements["oxygen"].affichage+' : '+ceil(this.elements["oxygen"].qte)+'%', 15, height - 74);
        text(this.elements["argon"].affichage+' : '+ceil(this.elements["argon"].qte)+'%', 15, height - 62);
        text(this.elements["carbone"].affichage+' : '+ceil(this.elements["carbone"].qte)+'%', 15, height - 50);
        text(ceil(this.stats["pression"].qte)+''+this.stats["pression"].affichage, 15, height - 38);
        text(ceil(this.stats["temperature"].qte)+''+this.stats["temperature"].affichage, 15, height - 26);
    }

}
