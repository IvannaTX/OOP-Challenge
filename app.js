class Pokemon{

    constructor(name, type, attack){

        this.name = name,

        this.type = type, 

        this.attack =attack

    }

    moveAttack = () =>{

        console.log(`${this.name} used ${this.attack}!`)

    }

}




const Grookey = new Pokemon("Grookey", "Grass", "Growl");

const Scorbunny = new Pokemon("Scorbunny", "Fire", "Ember");

Grookey.moveAttack();

Scorbunny.moveAttack(); 