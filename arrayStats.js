// Array statistics
// You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

// The returned object should have the following properties:
// sum: The sum of all numbers in the array.
// average: The average of all numbers in the array (rounded to two decimal places).
// min: The minimum value in the array.
// max: The maximum value in the array.

const arrayStats = (arr)=>{
    let sum=0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i]
    }

    let average = sum / arr.length
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    return({"sum":sum, "average":average, "min":min, "max":max})
}

console.log(arrayStats([1, 2, 3, 4, 5]))