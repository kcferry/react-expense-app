//
//  Object Destructuring
//


// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'New York',
//         temp: 33
//     }
// };


// const { name: firstname = 'Anon', age } = person
// console.log(`${firstname} is ${age}.`)


// const { city, temp: temperature } = person.location
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)


//
//  Array Destructuring
//


// const address = ['1299 south street', 'Falcarragh', 'Donegal', 'N56IRL' ]

// const [, city, state = 'New york' ] = address

// console.log(`You are in ${city}, ${state}.`)

const item = [ 'coffee (iced)', '$3.00', '$3.50', '$3.75' ]

const [ cofHot, , md,] = item
console.log(`A medium ${cofHot} costs ${md}`)