// Interface describes the STRUCTURE of an object
interface AttackerInterface {
    // attackers need a property "strength" (number)
    strength: number;

    // attackers need a method "receiveDamage()" that receives a number argument
    receiveDamage(number);
}


class Soldier implements AttackerInterface {
    isDead: Boolean = false;

    // these aren't necessary because of the "public" in "constructor()"
    // --☟☟☟----------------------------------------------------------
    // health: Number,
    // strength: Number,
    // specialization: String,
    // name: String,
    // weapon: String

    // adding "public" reduces repetition
    constructor(
      public health: number,
      public strength: number,
      public specialization: string,
      public name: string,
      public weapon: string
    ) {
      // this.health = health;
      // this.strength = strength;
      // this.specialization = specialization;
      // this.name = name;
      // this.weapon = weapon;
      // --☝︎☝︎☝︎----------------------------------------------------------
      // these aren't necessary because of the "public" in "constructor()"
    }

    receiveDamage(damage: number) {
        this.health -= damage;
    }
}


class Viking implements AttackerInterface {
    constructor(
      public name: string,
      public health: number,
      public strength: number
    ) {}

    receiveDamage(damage: number) {
        this.health -= damage;

        return 'ODIN!! RARR!!'
    }
}

class Saxon implements AttackerInterface {
    constructor(
      public health: number,
      public strength: number
    ) {}

    receiveDamage(damage: number) {
        this.health -= damage;

        return 'Please don\'t kill me.'
    }
}


const soldierA = new Soldier(1000, 20, 'sniper', 'Ragnarr', 'bow & arrow');
const soldierB = new Soldier(100, 300, 'berzerker', 'Gudrun', 'Battle Axe');

const saxonA = new Saxon(100, 10);
const saxonB = new Saxon(200, 20);

const vikingA = new Viking('Lief Erikson', 3000, 300);
const vikingB = new Viking('Ofred Stormcloak', 4000, 400);




function peopleAttack (person1: AttackerInterface, person2: AttackerInterface) {
    person2.receiveDamage(person1.strength);
    person1.receiveDamage(person2.strength);
}

// Not an attacker because it's missing the "receiveDamage()" method
// const otherDude = { strength: 9999 };

peopleAttack(vikingA, vikingB);
peopleAttack(vikingA, saxonA);

// Doesn't work because "otherDude" doesn't have the structure of AttackerInterface
// peopleAttack(otherDude, vikingA);
