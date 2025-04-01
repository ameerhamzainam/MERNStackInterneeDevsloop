let array1 = [1,2,3,4,5,6,7,8,,9,10];

const CondtionFunction = (x) =>{
    return x % 2 == 0;
}

const getEvenArray = (array1, callback) =>{

    let newarray = [];
    for (const element of array1) {
        if(callback(element)){
            newarray.push(element);
        }
    }
    return newarray;
}

let array2 = getEvenArray(array1,CondtionFunction)
console.log(array2)