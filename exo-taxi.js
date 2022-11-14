class Personnage {
    constructor(name, mental) {
        this.name = name
        this.mental = mental 
    }
}

class Musique {
    constructor(name, author) {
        this.name = name
        this.author = author 
    }
}

class Trajet {
    constructor(feux) {
        this.feux = feux
        this.changement =  0
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let musique = []
musique.push(new Musique("Anissa","Wejdene"),
             new Musique("Despecha","Rosalia"),
             new Musique("Die","Gazo"),
             new Musique("Last Last","Burna Boy"),
             new Musique("Miss You","Oliver Tree"))

let perso = new Personnage("Julien", 10)

let trajet = new Trajet(30)

console.log("Début du trajet pour " + perso.name)

while (trajet.feux > 0) {
    musicPlayed = musique[getRandomInt(musique.length)]
    trajet.feux -= 1

    console.log(musicPlayed)
    console.log("Feux restant : " + trajet.feux)

    if (musicPlayed.name == musique[0].name) {
        perso.mental -= 1
        trajet.changement += 1
    }

    if (perso.mental == 0) {
        console.log(perso.name + " explose !!!")
        break
    }
    
    if (trajet.feux == 0) {
        console.log(perso.name + " est arriver chez lui, il a changé " + trajet.changement + " fois de taxi.")
    }
}



