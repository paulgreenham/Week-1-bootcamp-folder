//Objects lesson spot-checks

// const car = {
//     color: "red",
//     numWheels: 4,
//     isFancy: true
// }

// let fancyStatement

// if(car.isFancy){
//     fancyStatement = "It is fancy."
// }
// else{
//     fancyStatement = "It is not fancy."
// }

// console.log("The " + car.color + " car has " + car.numWheels + " wheels. " + fancyStatement)


// const sandwichToppings = {
//     item: "Tomato",
//     toBeginning: false,
//     items: ["Lettuce", "Cheese", "Onions", "Hummus", "Mayo"]
// }

// if(sandwichToppings.toBeginning){
//     sandwichToppings.items.unshift(sandwichToppings.item)
// }
// else{
//     sandwichToppings.items.push(sandwichToppings.item)
// }

// console.log(sandwichToppings.items)


// const human = {
//     age: 0
// }

// const babyNameKey = "name"
// const babyNameValue = "Goojibear"

// human[babyNameKey] = babyNameValue

// console.log(human)


// const bag = {
//     weight: 10,
//     owner: "Larissa",
//     items: [                   // an array with objects in it!
//       {item: "Pen", count: 2},
//       {item: "Bottle", count: 1},
//       {item: "Book", count: 3}
//     ]
//   }

//   console.log(bag.items[0].item)




//Exercises

//1.

const person1 = {
    name: "Jill",
    age: 26,
    city: "Raleigh"
}

const person2 = {
    name: "Robert",
    age: 28,
    city: "Toronto"
}

if(person1.age == person2.age){
    if(person1.city == person2.city){
        console.log(person1.name + " wanted to date " + person2.name)
    }
    else{
        console.log(person1.name + " wanted to date " + person2.name + ", but couldn't")
    }
}
else{
    console.log(person1.name + " didn't want to date " + person2.name)
}

