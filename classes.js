var Soldier = (function () {
    // these aren't necessary because of the "public" in "constructor()"
    // --☟☟☟----------------------------------------------------------
    // health: Number,
    // strength: Number,
    // specialization: String,
    // name: String,
    // weapon: String
    // adding "public" reduces repetition
    function Soldier(health, strength, specialization, name, weapon) {
        this.health = health;
        this.strength = strength;
        this.specialization = specialization;
        this.name = name;
        this.weapon = weapon;
        this.isDead = false;
        // this.health = health;
        // this.strength = strength;
        // this.specialization = specialization;
        // this.name = name;
        // this.weapon = weapon;
        // --☝︎☝︎☝︎----------------------------------------------------------
        // these aren't necessary because of the "public" in "constructor()"
    }
    Soldier.prototype.receiveDamage = function (damage) {
        this.health -= damage;
    };
    return Soldier;
}());
var Viking = (function () {
    function Viking(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    Viking.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return 'ODIN!! RARR!!';
    };
    return Viking;
}());
var Saxon = (function () {
    function Saxon(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Saxon.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return 'Please don\'t kill me.';
    };
    return Saxon;
}());
var soldierA = new Soldier(1000, 20, 'sniper', 'Ragnarr', 'bow & arrow');
var soldierB = new Soldier(100, 300, 'berzerker', 'Gudrun', 'Battle Axe');
var saxonA = new Saxon(100, 10);
var saxonB = new Saxon(200, 20);
var vikingA = new Viking('Lief Erikson', 3000, 300);
var vikingB = new Viking('Ofred Stormcloak', 4000, 400);
function peopleAttack(person1, person2) {
    person2.receiveDamage(person1.strength);
    person1.receiveDamage(person2.strength);
}
// Not an attacker because it's missing the "receiveDamage()" method
// const otherDude = { strength: 9999 };
peopleAttack(vikingA, vikingB);
peopleAttack(vikingA, saxonA);
// Doesn't work because "otherDude" doesn't have the structure of AttackerInterface
// peopleAttack(otherDude, vikingA);
