// IP - 1085002
// OP - 1852000

const inputArray = [1,0,8,5,0,0,2];

let nonZeroIndex = 0;

for(let i=0; i< inputArray.length; i++){
  if(inputArray[i] !== 0){
    [inputArray[nonZeroIndex], inputArray[i]] = [inputArray[i], inputArray[nonZeroIndex]]
    nonZeroIndex++;
  }
}

console.log(inputArray)