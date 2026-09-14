
const pelinLeveys = 800;
const pelinKorkeus = 600;

const lautta = {
    x: pelinLeveys / 2,
    y: pelinKorkeus - 30,
    leveys: 200,
    korkeus: 50,
    piirra: function() {
        rectMode(CENTER);
        fill(0, 255, 0);
        rect(this.x, this.y, this.leveys, this.korkeus);
    },
    paivita: function() {
        this.x = mouseX;
    },
    osuuko: function(x, y) {
        const osuuX = this.x - this.leveys / 2 < x && x < this.x + this.leveys / 2;
        const osuuY = this.y - this.korkeus / 2 < y && y < this.y + this.korkeus / 2;
        return osuuX && osuuY;
    }
}

class Pomppija {
    constructor(x, y, xMuutos, yMuutos) {
        this.x = x;
        this.y = y;
        this.xMuutos = xMuutos;
        this.yMuutos = yMuutos;
        this.koko = 50;
    }

    piirra() {
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(this.x, this.y, this.koko, this.koko);
    }

    paivita() {
        // liikkuminen
        this.x += this.xMuutos;
        this.y += this.yMuutos;
        
        // pomppu, jos osuu
        if (lautta.osuuko(this.x, this.y) && this.yMuutos > 0) {
            this.yMuutos = -1 * this.yMuutos;
        }
        
        // painovoiman vaikutus
        this.yMuutos += 0.1;
    }
}

let pomppijat = [];
function teePomppijoita() {
    setInterval(function() {
        let uusiPomppija = new Pomppija(100, 100, 3, 0);
        pomppijat.push(uusiPomppija);
        console.log("pomppijoita: " + pomppijat.length);
    }, 1000);
}

function setup() {
    createCanvas(pelinLeveys, pelinKorkeus);
    frameRate(30);
    background(100);
    teePomppijoita();
}

function draw() {
    background(100);

    lautta.piirra();
    lautta.paivita();

    for (let pomppija of pomppijat) {
        pomppija.piirra();
        pomppija.paivita();
    }

    pomppijat = pomppijat.filter((p) => (p.y <= pelinKorkeus));
}