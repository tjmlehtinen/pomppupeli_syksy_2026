
const pelinLeveys = 800;
const pelinKorkeus = 600;

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
        if (this.y > pelinKorkeus) {
            this.yMuutos = -1 * this.yMuutos;
        }

        // painovoiman vaikutus
        this.yMuutos += 1;
    }
}

let testiPomppija = new Pomppija(100, 100, 0, 0);

function setup() {
    createCanvas(pelinLeveys, pelinKorkeus);
    background(100);
}

function draw() {
    background(100);
    testiPomppija.piirra();
    testiPomppija.paivita();
}