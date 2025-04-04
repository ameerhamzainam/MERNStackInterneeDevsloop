// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2000)
//         }, 2000);
//     })
// }

// console.log("Loading modules");
// console.log("Loading Data");
// let data = getdata();
// console.log("Data Loading");



// // here you will see all the code will be excecuted but but but what if i want getdata() to finish its work first and then excute the rest of the below code we use async await functions to gain the conterol of aysnc behavior of js
// // you can do this too
// data.then((value) => {   // call back approach
//     console.log(value);
//     console.log(data);
//     console.log("Data Loaded");
// })
// we can also do some better approach
console.log("*****************************")

// async function getdata1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(25)
//         }, 2500);
//     })
// }
async function getdata1() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')  //fetch('https://jsonplaceholder.typicode.com/todos/1') 
    let data = await x.json(); //async await approach                    //.then(response => response.json()) {promise approach}
    // console.log(data);                                                //.then(json => console.log(json))
    return data;
}
async function main() {
    console.log("Loading modules 1");
    console.log("Loading Data 1");
    let data1 = await getdata1(); // if you remove await keyword the data will not be fetched and there will bi no data from fetch api will be displayed
    console.log(data1);
    console.log("Data Loaded 1");
}
main()
