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

const prom1 = Promise.resolve("Promise 1");
const prom2 = Promise.resolve("Promise 2");
const prom3 = Promise.resolve("Promise 3");
const prom4 = Promise.reject("Rejected Promise 4");
Promise.all([prom4,prom1, prom2, prom3]) // Return new Promise when all the promiese will be resolved otherwise it will return rejected
    .then((value) => {
        console.log("all",value);
    }).catch((error) => console.log("all(error)",error))
Promise.allSettled([prom4, prom1, prom2, prom3]).then((value) => console.log("allSettled",value)).catch((error) => console.log(error))// Return an array of promies with thier Resolve/reject values along with the statuses
Promise.race([prom4,prom1, prom2, prom3,prom4]).then((value) => console.log("race",value)).catch((error) => console.log(error))// Return First settled Promise resolved/rejected, all the other things got ignored
Promise.any([prom2,prom4, prom1, prom2, prom3]).then((value) => console.log("any",value)).catch((error) => console.log(error))// Return First Resolved Promise, all the other things got ignored