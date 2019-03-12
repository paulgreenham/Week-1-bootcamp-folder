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

// const babyname.toLowerCase()Key = "name.toLowerCase()"
// const babyname.toLowerCase()Value = "Goojibear"

// human[babyname.toLowerCase()Key] = babyname.toLowerCase()Value

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

// const person1 = {
//     name.toLowerCase(): "Jill",
//     age: 26,
//     city: "Raleigh"
// }

// const person2 = {
//     name.toLowerCase(): "Robert",
//     age: 28,
//     city: "Toronto"
// }

// if(person1.age == person2.age){
//     if(person1.city == person2.city){
//         console.log(person1.name.toLowerCase() + " wanted to date " + person2.name.toLowerCase())
//     }
//     else{
//         console.log(person1.name.toLowerCase() + " wanted to date " + person2.name.toLowerCase() + ", but couldn't")
//     }
// }
// else{
//     console.log(person1.name.toLowerCase() + " didn't want to date " + person2.name.toLowerCase())
// }


//2.

// let myList = [
//     {type: "backpack", color: "grey", size: "medium", status: "worn"},
//     {type: "lunchbox", color: "clear", size: "small", status: "new"}
// ]

// myList[0].color = "green"
// myList.splice(1,1)

// console.log(myList)


//3.

// let secondList = [
//     {type: "computer", color: "silver", size: "medium", status: "used"},
//     {type: "jeans", color: "blue", size: "large", status: "worn"}
// ]

// myList.push(...secondList)

// console.log(myList)


//4.

// let library = {
//     books: [
//         {title: "Atlas Shrugged", author: "Ayn Rand"},
//         {title: "The Lord of the Rings", author: "JRR Tolkien"},
//         {title: "To Kill a Mockingbird", author: "Harper Lee"},
//         {title: "A Picture of Dorian Gray", author: "Oscar Wilde"}
//     ]
// }

// myList.push(library)

// console.log(myList)


//5.

// const reservations = {
//     "bob": { claimed: false },
//     "ted": { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation')

// if(reservations[name.toLowerCase()] && !reservations[name.toLowerCase()].claimed){
//     alert("Welcome to our establishment " + name + "! Your table is this way.")
//     reservations[name.toLowerCase()].claimed = true
// }
// else if(reservations[name.toLowerCase()] && reservations[name.toLowerCase()].claimed){
//     alert("Welcome " + name + ". There appears to be a conflict with your reservation. Please wait while we resolve the situation.")
// }
// else{
//     alert("Welcome " + name + ", we do not have a reservation listed under that name. Let me make one for you now.")
//     reservations[name.toLowerCase()] = {claimed: true}
// }

// console.log(reservations)


//Extension

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true/false, // choose one
    fridge: {
        price: 500,
        works: true/false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

let food = prompt("What item do you want to know about? (cheese, raddish, bread")
lowerFood = food.toLowerCase()

if(date > kitchen.fridge.items[food])