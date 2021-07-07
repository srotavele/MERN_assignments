class Ninja {
    constructor(first_name) {
        this.name = first_name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
        
    }
    sayName() {
        console.log(ninja1.name);
    }


    drinkSake() {
        this.health += 10
        console.log(`You're health is now: ${this.health}`)

    }

    showStats() {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Health: ${this.health}, Wisdom: ${this.wisdom}`);

    }



}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();



class Sensei extends Ninja {
    constructor(sensei_name) {
        super(sensei_name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        super.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        const message = ('Any way is the Only Way');
        console.log(message);
    }

}
const superSensei = new Sensei("Karl");
superSensei.speakWisdom();
superSensei.showStats();