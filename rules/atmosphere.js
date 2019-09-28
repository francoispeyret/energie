class Atmosphere {
    constructor() {
        this.elements = [
            {
                name: "azote",
                qte: 78,
                max: 100,
                affichage: 'N2 :'
            }, {
                name: "oxygen",
                qte: 20,
                max: 100,
                affichage: 'O2 :'
            }, {
                name: "argon",
                qte: 1,
                max: 100,
                affichage: 'Ar :'
            }, {
                name: "carbone",
                qte: 1,
                max: 100,
                affichage: 'CO2 :'
            },
        ];

        for(let el of this.elements) {
            el.stat = new Stat(el.qte,el.max);
        }

        this.stats = [
            {
                name: "temperature",
                qte: 15,
                max: null,
                unit: 'C°',
                affichage: ''
            }, {
                name: "pression",
                qte: 1043,
                max: null,
                unit: 'hPa',
                affichage: ''
            }
        ]

        for(let stat of this.stats) {
            stat.stat = new Stat(stat.qte,stat.max,stat.unit);
        }
    }

    update() {
        if(this.stats[1].qte >= this.stats[1].max) {
            this.stats[1].qte = this.stats[1].max;
        } else {
            //this.stats["pression"].qte += 1;
        }
    }

    show(w) {
        const atmoHeight = map(this.stats[1].qte,1000,1200,40,60);
        ellipseMode(CENTER);
        fill(255,5);
        ellipse(0,0,w+atmoHeight*2,w+atmoHeight*2);
        fill(255,12);
        ellipse(0,0,w+atmoHeight,w+atmoHeight);
    }

    showInterface() {

        strokeWeight(1);
        stroke(255);
        fill(15);
        rect(10, height - 100, 70, 85);

        textAlign(LEFT);
        fill(255);
        noStroke();
        textSize(10);

        let atomCoord = createVector(15, height - 24);
        let offetY = 0;
        for(let el of this.elements) {
            text(el.affichage + ' ' + el.stat.getText(), atomCoord.x, atomCoord.y - (offetY * 12));
            offetY++;
        }
        for(let stat of this.stats) {
            text(stat.affichage + ' ' + stat.stat.getText(), atomCoord.x, atomCoord.y - (offetY * 12));
            offetY++;
        }

        /*text(this.elements["azote"].affichage+' : '+ceil(this.elements["azote"].qte)+'%', 15, height - 86);
        text(this.elements["oxygen"].affichage+' : '+ceil(this.elements["oxygen"].qte)+'%', 15, height - 74);
        text(this.elements["argon"].affichage+' : '+ceil(this.elements["argon"].qte)+'%', 15, height - 62);
        text(this.elements["carbone"].affichage+' : '+ceil(this.elements["carbone"].qte)+'%', 15, height - 50);*/
        //text(ceil(this.stats["pression"].qte)+''+this.stats["pression"].affichage, 15, height - 38);
        //text(ceil(this.stats["temperature"].qte)+''+this.stats["temperature"].affichage, 15, height - 26);
    }

}
