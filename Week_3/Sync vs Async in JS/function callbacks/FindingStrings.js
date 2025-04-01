//Program that Gives An array where each word has length greather than five
let array1 = ["Ameer","Hamza","Ahmed","Faez","AnasFarani","Uzair"];

const conditionfunction=(x)=>{
    return x.length >= 5;
}

function getStringGreater5(array1,callback){
    let newarray = [];

    for (const element of array1) {
        if(callback(element)){
            newarray.push(element);
        }
    }
    return newarray;
}

const array2 = getStringGreater5(array1,conditionfunction)
console.log(array2)