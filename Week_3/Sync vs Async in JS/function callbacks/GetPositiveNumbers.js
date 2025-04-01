//Program to remove Negative Numbers from an Array


let array = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

const GetPositiveValue = (x) =>{
    return x >= 0 ;
}

const MakingAnArray = (array,callback) =>{
    let PostiveArray = [];
    for (const element of array) {
        if(callback(element)){
            PostiveArray.push(element);
        }
    }
    return PostiveArray;
}

let ConvertedArray = MakingAnArray(array,GetPositiveValue)
console.log(ConvertedArray) 
