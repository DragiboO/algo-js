class Killer {
    constructor(name, health) {
        this.name = name
        this.health = health 
    }
}

class Survivant {
    constructor(name, stats) {
        this.name = name
        this.stats = stats
    }
}

class Stats {
    constructor(name, death, damage, final) {
        this.name = name
        this.death = death
        this.damage = damage
        this.final = final 
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let killer = new Killer("Jason", 100)

let survivor = []
let graveyard = []
let cliché = ["le Chef d'équipe", "la Blonde", "le Nerd", "le Noir", "la Vierge", "le Paumé", "la Pom-Pom Girl", "la Futé"]
let prénom = ["Brandon", "Samantha", "Jordan", "Samy", "Julie", "Thomas", "Beverly", "Ashley", "Kelly"]

for (let i = 0; i < 5; i++) {

    let proba1 = randBetween(0, 100)
    let proba2 = randBetween(0,100 - proba1)
    let proba3 = 100 - proba1 - proba2

    survivor.push(new Survivant(prénom[getRandomInt(prénom.length)],
                                new Stats(cliché[getRandomInt(cliché.length)],
                                          proba1 / 100,
                                          proba2 / 100,
                                          proba3 / 100)))
}

let save = []
survivor.forEach(element => save.push(element));

console.log(save)

let game = 1

while (game == 1) {

    let choose = survivor[0]
    
    let proba = Math.random()

    // console.log(proba)
    // console.log(choose)

    console.log(killer.name + " à " + killer.health + " PV")

    if (proba <= choose.stats.death) {
        // console.log("death")
        console.log(killer.name + " à tué " + choose.name + " !")
        graveyard.push(survivor[0].name)
        survivor.shift()
    } else if (proba > choose.stats.death && proba <= choose.stats.damage) {
        // console.log("damage")
        console.log(choose.name + " à esquivé et a infligé 10 de dégâts !")
        killer.health -= 10
    } else {
        // console.log("damage death")
        console.log(killer.name + " à tué " + choose.name + " mais il la frappé avant de mourrir")
        killer.health -= 15
        graveyard.push(survivor[0].name)
        survivor.shift()
    }

    if (killer.health <= 0) {
        if (graveyard.length == 0) {
            graveyard.push("personne")
        }

        if (survivor.length == 0) {
            console.log("Tout le monde est mort !")
            game = 0
        } else {
            console.log("Les survivants ont gagné mais RIP à " + graveyard)
            game = 0
        }
    } else if (survivor.length == 0) {
        console.log("Les survivants sont tous mort !")
        game = 0
    }
}
