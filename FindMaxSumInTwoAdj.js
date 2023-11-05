let input = [3, 2, 7, 10]
let adjArrayCount = 2
let maxSum = 0
let currentSum = 0

maxSum = currentSum = input[0] + input[1]

for(let i =1; i < input.length ; i++){
    currentSum = input[i] + input[i+1]
    if(maxSum < currentSum)
      maxSum = currentSum
}

console.log(maxSum);