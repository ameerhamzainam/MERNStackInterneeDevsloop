console.log("Promises Practice");

let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    console.log(rand)
    if (rand < 0.5) {
        reject("abc");
    }
    else {
        setTimeout(() => {
            console.log("Promise Start")

        }, 500);
        setTimeout(() => {
            resolve("xyz")
            console.log("Promise Done")

        }, 2000);
    }

})

prom1.then((responce) => {
    console.log("Promise Got Resolve at:", responce)
}).catch((responce) => {
    console.log("Promise Got rejected at:", responce)
})