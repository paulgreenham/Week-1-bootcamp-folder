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

// const person1 = {
//     name: "Jill",
//     age: 26,
//     city: "Raleigh"
// }

// const person2 = {
//     name: "Robert",
//     age: 28,
//     city: "Toronto"
// }

// if(person1.age == person2.age){
//     if(person1.city == person2.city){
//         console.log(person1.name + " wanted to date " + person2.name)
//     }
//     else{
//         console.log(person1.name + " wanted to date " + person2.name + ", but couldn't")
//     }
// }
// else{
//     console.log(person1.name + " didn't want to date " + person2.name)
// }


//2.

let myList = [
    {type: "backpack", color: "grey", size: "medium", status: "worn"},
    {type: "lunchbox", color: "clear", size: "small", status: "new"}
]

myList[0].color = "green"
myList.splice(1,1)

// // console.log(myList)


// //3.

let secondList = [
    {type: "computer", color: "silver", size: "medium", status: "used"},
    {type: "jeans", color: "blue", size: "large", status: "worn"}
]

myList.push(...secondList)

// console.log(myList)


//4.

let library = {
    books: [
        {title: "Atlas Shrugged", author: "Ayn Rand"},
        {title: "The Lord of the Rings", author: "JRR Tolkien"},
        {title: "To Kill a Mockingbird", author: "Harper Lee"},
        {title: "A Picture of Dorian Gray", author: "Oscar Wilde"}
    ]
}

myList.push(library)

console.log(myList)
