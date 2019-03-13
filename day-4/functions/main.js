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