//Loops lesson spot-checks

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

// for(let company of companies){
//     console.log("One day I will work at " + company)
// }




//Exercises


//1.

// let names = ["Ben", "Reuven", "Reut", "Paul"]
// let ages = [26, 25, 29, 36]

// for(let index in names){
//     console.log(names[index] + " is " + ages[index] + " years old.")
// }


//2.

// let nums = [342, 920, 5932, 120, 892]

// let sum = 0
// for(let num of nums){
//     sum += num
// }

// console.log(sum)


//3.

// console.log(sum / nums.length)


//4.

// let nums = []

// for(let i = 1; i <= 100; i++){
//     nums.push(i)
// }

// console.log(nums)


//5.

// for(let num of nums){
//     if(num % 2 == 1){
//         console.log(num)
//     }
// }


//6.

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

// for(let index in nums){
//     if(nums[index] == 709){
//         console.log(index)
//     }
// }


//7.

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for(let index in names){
//     people.push({name: names[index], age: ages[index]})
// }

// console.log(people)


//8.

// for(let person of people){
//     console.log(person.name + " is " + person.age + " years old.")
// }


//9.

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
// ]

// for(let index in posts){
//     if(posts[index].id == 2){
//         posts.splice(index,1)
//     }
// }

// console.log(posts)

//10.

// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []},
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
//     },
//     {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []}
// ]

// for(let index in posts){
//     if(posts[index].id == 2){
//         for(let postIndex in posts[index].comments){
//             if(posts[index].comments[postIndex].id ==3){
//                 posts[index].comments.splice(postIndex, 1)
//             }
//         }
//     }
// }

// console.log(posts)


//Extension

// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
// }

// const index = Object.keys(dictionary)

// for(let letter of index){
//     console.log("Words that begin with " + letter + ":")
//     for(let item of dictionary[letter]){
//         console.log(item)
//     }
// }