//Functions spot-checks

// const tellAJoke = function(){
//     console.log("Leading writers from many nations were asked to write a book about elephants.")
//     console.log("The French wrote 'The secret love life of the elephant")
//     console.log("The American wrote 'How to build a bigger and better elephant")
//     console.log("The German wrote 'The history of the elephant in 12 volumes")
// }

// tellAJoke()


// const greet = function(name){
//     let currentDate = new Date()
//     let hour = currentDate.getHours()
//     if(hour < 12){
//         console.log("Good Morning, " + name + "!")
//     }
//     else if(hour < 18){
//         console.log("Good Afternoon, " + name + "!")
//     }
//     else{
//         console.log("Good Evening, " + name + "!")

//     }
// }

// greet("Jona")


// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like " + food)
//     }
// }
  
// console.log(person.name) 
// person.speak("cheese toast")




//Exercises

//1.

// const calcAge = function(currentYear, birthYear){
//     let currentAge = currentYear - birthYear
//     return currentAge
// }

// const age = calcAge(2017, 1989)
// console.log(age)


//2.

// const calcAge = function(currentYear, birthYear){
//     let ages = []
//     let upperAge = currentYear - birthYear
//     let lowerAge
//     if(upperAge > 0){
//         lowerAge = upperAge - 1
//     }
//     else{
//         lowerAge = upperAge
//     }
//     ages.push(upperAge)
//     ages.push(lowerAge)
//     return ages
// }

// const age = calcAge(2017, 1989)
// console.log("You are either " + age[0] + " or " + age[1])


//3.

// const isEven = function(number){
//     if(number % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isEven(42))


//4.

// const findOdds = function(nums){
//     odds = []
//     for(let num of nums){
//         if(!isEven(num)){
//             odds.push(num)
//         }
//     }
//     return odds
// }

// let inputArray = [4, 7, 23, 678, 17, 79, 54, 89, 2, 13]

// for(let num of findOdds(inputArray)){
//     console.log(num)
// }


//5.

// const checkNum = function(number, nums){
//     for(let num of nums){
//         if(num == number){
//             return true
//         }
//     }
//     return false
// }

// console.log(checkNum(13, inputArray))


//6.

// const calculator = {
//     add: function(num1, num2){return num1 + num2},
//     subtract: function(num1, num2){return num1 - num2}
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2))


//7.

// const increaseByNameLength = function(money, name){
//     return money * name.length
// }

// const makeRegal = function(name){
//     return "His Royal Highness, " + name
// }

// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100)
