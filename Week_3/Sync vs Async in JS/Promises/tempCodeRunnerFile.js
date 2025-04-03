const prom = new Promise((resolve, reject) => {
    resolve("hello");
})

// console.log(prom1)
prom.then((value) => {
    console.log(value)
})

Promise.resolve("Hello")
    .then((value) => {
        return value + "World"
    }).then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })

Promise.reject("I'm")
    .then((value) => {
        return "Value:" + value;
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log("Error:", error)
    })
