// function outer() {
//     let counter = 0; 

//     function inner() {
//         counter++;
//         console.log(counter);
//     }

//     return inner;
// }
// const countUp = outer();
// countUp();
// countUp(); 
// countUp(); 
// countUp();
// countUp(); 
// countUp();
// function secretHolder(secret) {
//     return function() {
//         return `The secret is: ${secret}`;
//     }
// }

// const getSecret = secretHolder("🍕");
// console.log(getSecret()); // The secret is: 🍕

// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
//     // console.log("outer i",i)
// }
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
    console.log("outer i",i);
}
