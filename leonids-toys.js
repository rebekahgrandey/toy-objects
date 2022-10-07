const toys = [{
    id: 1,
    name: "Tamagotchi",
    price: 35,
    weight: .2
},

{
    id: 2,
    name: "Furby",
    price: 55,
    weight: 2
},

{
    id: 3,
    name: "Legos",
    price: 60,
    weight: 5
}]

// console.log(toys)

const skipIt = {
    id: 4,
    name: "Skip-It",
    price: 25,
    weight: 2.5
}

const briteLite = {
    id: 5,
    name: "Brite Lite",
    price: 20,
    weight: 3
}

toys.push(skipIt)
toys.push(briteLite)

// console.log(toys)

// for (toy of toys) {
//     toy.price += toy.price * 0.05;
//     console.log(`The ${toy.name} costs $${toy.price} and weighs ${toy.weight} lbs.`)
// }

// 1. Delete the price property on the objects in your array
for (const toy of toys) {
    delete toy.price
}
console.log(toys)

// 3. Complete the addPhoneToInventory function that will use the .set() method on the Map to store prices for toys.
const addPriceToInventory = (toyObject, price) => {

// 2. Create a new Map()
const inventoryPrices = new Map()
inventoryPrices.set(JSON.stringify("Tamagotchi"), 35)
inventoryPrices.set(JSON.stringify("Furby"), 55)
inventoryPrices.set(JSON.stringify("Legos"), 60)
inventoryPrices.set(JSON.stringify("Skip-It"), 25)
inventoryPrices.set(JSON.stringify("Brite Lite"), 20)

// Hint: You will need to use JSON.stringify() for each object when you set it as a KEY in the Map.

// 4. Invoke addPhoneToInventory as many times as you have toys in your array using square bracket notation to access each toy (see above example).

return addPriceToInventory(toyObject[0], price)

}

const toysSet = new Set()

toysSet .add(toys)

console.log(toysSet)





