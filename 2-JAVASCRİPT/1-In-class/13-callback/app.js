
function total1(array){
    let sum = 0;
    for (let i=0;i<array.length; i++){
        console.log(array[i]);
        sum += array[i];
    }
    return sum;
}

console.log(total1([2,4,5,6,7,8]))


// callback
function total2(array, cb){
    let sum = 0;
    for (let i=0;i<array.length; i++){
        cb(array[i]);
        sum += array[i];
    }
    return sum;
}

// const result = total2([2,3,4,5,6,7,8,9],console.log)
const result = total2([2,3,4,5,6,7,8,9],(val)=>{
    console.log(val)
})
// console.log(result)