const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Kyle',
        //     age: 32
        // })
        reject('Something went wrong')
    }, 1500);
})

console.log('before')

promise.then((data) => {
    console.log(data)
}).then(() => {
    console.log('Does this run')
}).catch((error) => {
    console.log('Error: ', error)
})

console.log('after')