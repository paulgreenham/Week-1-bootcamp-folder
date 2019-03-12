//Arrays Spot-checks

// let myStuff = ["Computer", "Cup", "mouse"]
// console.log(myStuff[1])

// const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// console.log("The first plant is " + plants[0] + ", and the last one is " + plants[plants.length - 1])

// myStuff.unshift(myStuff[myStuff.length - 1])
// myStuff.push(myStuff[1])

// myStuff.push(...myStuff)
// console.log(myStuff)

// randomStuff = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
// randomStuff.splice(0, randomStuff.length - 1)
// console.log(randomStuff)





//Mid-Lesson Array Exercise

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const betterGenes = [...genes]

let replacedGene = betterGenes[2]
betterGenes[2] = betterGenes[4]
betterGenes[4] = replacedGene

let cutGene = betterGenes.splice(3, 1)[0]
betterGenes.splice(betterGenes.length, 0, cutGene, cutGene)

betterGenes.unshift("FXT")

console.log(betterGenes)