class Ninja{
    constructor(first_name){
        this.name = first_name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(ninja1.name);
    }


    drinkSake(){
        this.health += 10
        console.log(`You're health is now: ${this.health}`)

    }

    showStats(){
        console.log (`Name: ${this.name}, Speed: ${this.speed}, Health: ${this.health}`); 
        
    }



}
    const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.drinkSake();
    ninja1.showStats();
