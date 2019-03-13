//JS this spot-checks

// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   }
  
//   person.introduce()




//Exercises

//1.

// const person = {
//     hungry: true,
//     feed: function () {
//         if(this.hungry){
//             this.hungry = false
//             console.log("I'm no longer hungry!")
//         }
//     }
// }

// person.feed()


//2.

// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);


//3.

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     },
//     fuel: 0
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());


//4.

// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function (amount) {
//         this.coinCount -= amount
//     }
//   };
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


//5.

// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     console.log(person.name + " said: " + result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "I'm scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I don't have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);


//6.

const coffeeShop = {
    beans: 40,
    money: 100,
  
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 5},
        americano: {beanRequirement: 5, price: 3},
        doubleShot: {beanRequirement: 15, price: 9},
        frenchPress: {beanRequirement: 12, price: 7},
    },

    buyDrink: function (drinkType) {
        this.money += this.drinkRequirements[drinkType].price
    },

    makeDrink: function (drinkType) {
        if(!this.drinkRequirements[drinkType]){
            console.log("Sorry, we don't make " + drinkType)
        }
        else if(this.drinkRequirements[drinkType].beanRequirement <= this.beans){
            console.log("Here's your " + drinkType + "!")
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
            this.buyDrink(drinkType)
        }
        else{
            console.log("Sorry, we're all out of beans")
        }
    },

    buyBeans: function (numBeans) {
        this.money -= numBeans * 0.5
        this.beans += numBeans
    },
}
  
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
console.log("We now have " + coffeeShop.money + " cash.")
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); 
console.log("We now have " + coffeeShop.money + " cash.")
coffeeShop.buyBeans(40)
console.log("Beans purchased. We now have " + coffeeShop.money + " cash.")
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
console.log("We now have " + coffeeShop.money + " cash.")
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
console.log("We now have " + coffeeShop.money + " cash, and " + coffeeShop.beans + " beans.")
coffeeShop.buyBeans(40)
console.log("Beans purchased. We now have " + coffeeShop.money + " cash, and " + coffeeShop.beans + " beans. Tight profits.")