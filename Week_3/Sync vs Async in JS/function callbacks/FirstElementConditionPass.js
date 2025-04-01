//Program that return true if first value of an array meets the condition 
let array1 = [3, 8, 1, 5, 20, 7];

console.log(FirstElementConditionPass(array1,(x)=> x>=10 ))

function FirstElementConditionPass(array, callback){
    let flag = false;
    for (const element of array) {
        if(callback(element)){
            flag = true;
            console.log("Found at",element);
            break;
        }
    }
    return flag;
}